// controllers/playerController.js
const Player = require('../models/Player');

// Create a new player (admin functionality)
exports.createPlayer = async (req, res) => {
  try {
    const { name, team, role, credit } = req.body;

    const player = new Player({
      name,
      team,
      role,     // e.g., Batsman, Bowler, All-Rounder, Wicket-Keeper
      credit    // e.g., 9.5, 8.0 (used in fantasy team selection)
    });

    await player.save();
    res.status(201).json({ message: 'Player created successfully', player });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create player', error });
  }
};

// Get all players
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json({ players });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch players', error });
  }
};

// Get players by team
exports.getPlayersByTeam = async (req, res) => {
  try {
    const { team } = req.params;
    const players = await Player.find({ team });
    res.status(200).json({ players });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch team players', error });
  }
}; 
