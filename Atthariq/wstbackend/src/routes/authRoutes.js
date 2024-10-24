'use strict';

const express = require('express');
const { register, login } = require('../controllers/authController');
const badRequest = require('../handler/badRequestHandler');

const router = express.Router();

router.post('/register', register);
router.post('/login', badRequest(['username', 'password']), login);

module.exports = router;
