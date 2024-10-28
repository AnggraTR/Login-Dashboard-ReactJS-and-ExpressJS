   // controllers/authController.js
   const db = require('../db'); // Mengimpor koneksi database

   exports.login = (req, res) => {
       const { username, password } = req.body;

       // Query untuk mencari pengguna
       db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
           if (err) {
               return res.status(500).json({ message: 'Server error' });
           }
           if (results.length > 0) {
               const user = results[0];
               if (user.password === password) { // Anda sebaiknya menggunakan hashing untuk password
                   return res.status(200).json({ message: 'Login successful' }); // Pastikan ada respons
               }
           }
           res.status(401).json({ message: 'Invalid credentials' });
       });
   };
