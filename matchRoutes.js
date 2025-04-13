// routes/matchRoutes.js
const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const authenticate = require('../middleware/authMiddleware');

// Create a new match (protected route — ideally admin only)
router.post('/create', authenticate, matchController.createMatch);

// Get all upcoming matches (public route)
router.get('/upcoming', matchController.getUpcomingMatches);

// Get details of a specific match by ID (public route)
router.get('/:matchId', matchController.getMatchById);

module.exports = router;
