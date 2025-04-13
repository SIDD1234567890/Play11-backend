// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// JWT secret should be the same as in your authController.js
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware to check if the user is authenticated
const authenticate = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Add user information to the request object
    next(); // Allow the request to move to the next handler
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticate;
