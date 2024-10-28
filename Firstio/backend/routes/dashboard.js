const express = require('express');
const jwt = require('jsonwebtoken');
const DashboardController = require('../controllers/DashboardController');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey'; // Use environment variable for JWT_SECRET in production

// Middleware to verify token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Check if authorization header is present
  if (!authHeader) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  // Split the "Bearer <token>" and extract token
  const token = authHeader.split(' ')[1];

  // If token is missing or incorrect format
  if (!token) {
    return res.status(401).json({ message: 'Access Denied: Invalid token format' });
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach the decoded token to the request
    next(); // Proceed to the next middleware/controller
  } catch (err) {
    // Token verification failed
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

// @route GET /api/dashboard
// @desc Get dashboard data (protected)
// @access Private
router.get('/', authenticateToken, DashboardController.getDashboardData);

module.exports = router;
