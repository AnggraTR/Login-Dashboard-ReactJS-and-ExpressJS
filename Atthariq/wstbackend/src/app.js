'use strict';

const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');
const auth = require('./middleware/auth');
const notFound = require('./handler/notFound');
const errorHandler = require('./handler/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', // Ganti dengan URL frontend Anda
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.urlencoded({ extended: true }));

// Tidak memerlukan autentikasi
app.use('/auth', authRoutes);

// Routes dengan autentikasi
app.use('/users', auth, userRoutes);

// Home Routes
app.use('/', homeRoutes);

// Middleware untuk rute yang tidak ada
app.use(notFound);

// Middleware untuk error handling
app.use(errorHandler);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
  });
});
