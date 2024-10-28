// db.js
const mysql = require('mysql2');

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

module.exports = db;
