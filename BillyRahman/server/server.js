// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // ganti dengan password MySQL Anda
    database: 'pagewstunbin' // ganti dengan nama database Anda
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    
    db.query(query, [username, password], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Validasi input
        if (!username || !password) {
            return res.status(400).json({ message: 'Username dan password diperlukan' });
        }

        // Cek apakah username sudah ada
        const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
        db.query(checkUserQuery, [username], (err, results) => {
            if (err) throw err;

            if (results.length > 0) {
                return res.status(400).json({ message: 'Username sudah digunakan' });
            }

            // Simpan pengguna baru
            const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
            db.query(insertUserQuery, [username, password], (err, results) => {
                if (err) {
                    return res.status(500).json({ message: 'Error mendaftar pengguna', error: err });
                }
                res.status(201).json({ message: 'Pendaftaran berhasil' });
            });
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
