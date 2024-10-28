const express = require('express');
const ConnController = require('../controllers/ConnController');
const router = express.Router();

// Login route
router.post('/login', ConnController.loginUser);

// Register route (optional for user creation)
router.post('/register', ConnController.registerUser);

module.exports = router;
