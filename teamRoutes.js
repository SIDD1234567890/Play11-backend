const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const authenticate = require('../middleware/authMiddleware');

// Route to get all teams (public)
router.get('/', teamController.getAllTeams);

// Route to get a specific team by ID (public)
router.get('/:id', teamController.getTeamById);

// Route to create a new team (protected — ideally admin only)
router.post('/create', authenticate, teamController.createTeam);

// Route to update team details (protected)
router.put('/:id', authenticate, teamController.updateTeam);

// Route to delete a team (protected)
router.delete('/:id', authenticate, teamController.deleteTeam);

module.exports = router;
