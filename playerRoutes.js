const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const authenticate = require('../middleware/authMiddleware');

// Route to create a new player (protected — ideally admin only)
router.post('/create', authenticate, playerController.createPlayer);

// Route to get all players (public)
router.get('/', playerController.getAllPlayers);

// Route to get players by team name (public)
router.get('/team/:team', playerController.getPlayersByTeam);

// Route to get a player by ID (public)
router.get('/:id', playerController.getPlayerById);

// Route to update player details (protected)
router.put('/:id', authenticate, playerController.updatePlayer);

// Route to delete a player (protected)
router.delete('/:id', authenticate, playerController.deletePlayer);

module.exports = router; 
