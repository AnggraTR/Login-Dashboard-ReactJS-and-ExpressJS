import express from 'express';
import { verifyToken } from '../middleware/VerifyToken.js'; // Middleware to verify JWT tokens
import { getUsers, Register, Login, getUserById } from '../controllers/Users.js'; // Importing user-related controllers
import { refreshToken } from '../controllers/RefreshToken.js'; // Importing refresh token controller

const router = express.Router();

// Define routes

// Route to get all users, protected by token verification
router.get('/users', verifyToken, getUsers);

// Route to get a specific user by ID, protected by token verification
router.get('/users/:id', verifyToken, getUserById);

// Route to register a new user (open to everyone)
router.post('/users', Register);

// Route for user login (open to everyone)
router.post('/login', Login);

// Route for refreshing JWT tokens (open to everyone)
router.post('/refresh-token', refreshToken);

// Export the router to be used in the main application
export default router;
