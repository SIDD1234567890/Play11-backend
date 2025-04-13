// routes/contestRoutes.js
const express = require('express');
const router = express.Router();
const contestController = require('../controllers/contestController');
const authenticate = require('../middleware/authMiddleware');

// Create a new contest (protected route)
router.post('/create', authenticate, contestController.createContest);

// Get all contests for a specific match (public route)
router.get('/match/:matchId', contestController.getContestsByMatch);

// Join a contest (protected route)
router.post('/join/:contestId', authenticate, contestController.joinContest);

module.exports = router;
