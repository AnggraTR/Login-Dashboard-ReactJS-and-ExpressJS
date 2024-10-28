// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController') // Pastikan jalur ini benar
const cors = require('cors'); // Tambahkan ini

// Rute untuk login
router.post('/login', authController.login);

router.use(cors()); // Tambahkan ini

module.exports = router;
