// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Tambahkan ini
const authRoutes = require('./routes/auth');
const cors = require('cors'); // Tambahkan ini

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Tambahkan ini untuk mengaktifkan CORS
app.use(bodyParser.json());

// Koneksi ke MySQL
const db = mysql.createConnection({
    host: 'localhost', // Ganti dengan host Anda
    user: 'root',      // Ganti dengan username Anda
    password: '',      // Ganti dengan password Anda
    database: 'web_software_tool'  // Ganti dengan nama database Anda
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('MySQL connected');
});

// Rute
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
