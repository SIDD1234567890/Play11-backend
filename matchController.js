// controllers/matchController.js
const Match = require('../models/Match');

// Create a new match (admin only)
exports.createMatch = async (req, res) => {
  try {
    const { teamA, teamB, startTime } = req.body;

    const match = new Match({
      teamA,
      teamB,
      startTime,
    });

    await match.save();
    res.status(201).json({ message: 'Match created successfully', match });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create match', error });
  }
};

// Get all upcoming matches
exports.getUpcomingMatches = async (req, res) => {
  try {
    const currentTime = new Date();
    const matches = await Match.find({ startTime: { $gte: currentTime } }).sort('startTime');

    res.status(200).json({ matches });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch matches', error });
  }
};

// Get match details by ID
exports.getMatchById = async (req, res) => {
  try {
    const match = await Match.findById(req.params.matchId);
    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }
    res.status(200).json({ match });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch match', error });
  }
};
