import express from 'express';
import { verifyToken } from '../middleware/VerifyToken.js';
import { getUsers, Register, Login, getUserById } from '../controllers/Users.js'; // Import getUserById
import { refreshToken } from '../controllers/RefreshToken.js'; // Ensure the path is correct

const router = express.Router();

// Define routes
router.get('/users', verifyToken, getUsers); // Protecting the getUsers route
router.get('/users/:id', verifyToken, getUserById); // Protecting the getUserById route
router.post('/users', Register); // Using Register function to register users
router.post('/login', Login); // Using Login function for user login
router.post('/token', refreshToken); // Use POST if this is for refreshing tokens

// Export router
export default router;