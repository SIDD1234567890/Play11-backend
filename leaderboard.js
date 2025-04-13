const Contest = require('../models/Contest');
const User = require('../models/User');

exports.getLeaderboard = async (req, res) => {
  const { contestId } = req.params;

  try {
    const contest = await Contest.findById(contestId).populate('participants.userId');

    if (!contest) {
      return res.status(404).json({ message: 'Contest not found' });
    }

    const leaderboard = contest.participants
      .map(entry => ({
        userId: entry.userId._id,
        username: entry.userId.username,
        points: entry.points,
      }))
      .sort((a, b) => b.points - a.points); // Descending order

    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leaderboard', error });
  }
};
