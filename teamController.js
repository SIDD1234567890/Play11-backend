const Team = require('../models/team'); // Assuming you have a Team model

// Get all teams
exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find(); // Assuming you are using MongoDB
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve teams', error });
  }
};

// Get a specific team by ID
exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve team', error });
  }
};

// Get teams by name (e.g., searching by team name)
exports.getTeamsByName = async (req, res) => {
  try {
    const teams = await Team.find({ name: new RegExp(req.params.name, 'i') }); // Case-insensitive search
    if (teams.length === 0) {
      return res.status(404).json({ message: 'No teams found' });
    }
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Failed to search teams', error });
  }
};

// Create a new team
exports.createTeam = async (req, res) => {
  try {
    const { name, players, logo } = req.body;
    const newTeam = new Team({ name, players, logo }); // Assuming 'name', 'players', and 'logo' are in the request body

    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create team', error });
  }
};

// Update team details
exports.updateTeam = async (req, res) => {
  try {
    const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTeam) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.status(200).json(updatedTeam);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update team', error });
  }
};

// Delete a team
exports.deleteTeam = async (req, res) => {
  try {
    const result = await Team.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.status(200).json({ message: 'Team deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete team', error });
  }
};
