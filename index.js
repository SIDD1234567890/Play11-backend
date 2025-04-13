// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const contestRoutes = require('./routes/contestRoutes');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS if frontend is on a different port
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/auth', authRoutes);
app.use('/contests', contestRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Play11 Fantasy Cricket API is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
