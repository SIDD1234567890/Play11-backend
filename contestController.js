// controllers/contestController.js
const Contest = require('../models/Contest');

// Create a new contest
exports.createContest = async (req, res) => {
  try {
    const { matchId, name, prizePool, entryFee, totalSpots } = req.body;

    const contest = new Contest({
      matchId,
      name,
      prizePool,
      entryFee,
      totalSpots,
      spotsLeft: totalSpots,
      createdBy: req.user.userId // coming from authMiddleware
    });

    await contest.save();
    res.status(201).json({ message: 'Contest created successfully', contest });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create contest', error });
  }
};

// Get all contests for a match
exports.getContestsByMatch = async (req, res) => {
  try {
    const { matchId } = req.params;
    const contests = await Contest.find({ matchId });

    res.status(200).json({ contests });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch contests', error });
  }
};

// Join a contest
exports.joinContest = async (req, res) => {
  try {
    const { contestId } = req.params;
    const userId = req.user.userId;

    const contest = await Contest.findById(contestId);
    if (!contest) {
      return res.status(404).json({ message: 'Contest not found' });
    }

    if (contest.spotsLeft <= 0) {
      return res.status(400).json({ message: 'Contest is full' });
    }

    // Check if user already joined
    if (contest.joinedUsers.includes(userId)) {
      return res.status(400).json({ message: 'User already joined this contest' });
    }

    contest.joinedUsers.push(userId);
    contest.spotsLeft -= 1;

    await contest.save();
    res.status(200).json({ message: 'Joined contest successfully', contest });
  } catch (error) {
    res.status(500).json({ message: 'Failed to join contest', error });
  }
};
