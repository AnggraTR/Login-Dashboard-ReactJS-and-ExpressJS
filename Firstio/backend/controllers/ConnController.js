const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('../config/database');

const JWT_SECRET = 'supersecretkey'; // In production, store this securely (like in environment variables)

const ConnController = {
  // Login functionality
  loginUser: (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const query = 'SELECT * FROM user WHERE email = ?';
    connection.query(query, [email], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error' });
      }

      if (results.length === 0) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      const user = results[0];

      // Compare the provided password with the hashed password stored in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // If password matches, create and return JWT token
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

      res.json({ token, message: 'Login successful' });
    });
  },

  // Register functionality (insert new user)
  registerUser: async (req, res) => {
    const { email, password, name } = req.body;

    // Check if the user already exists
    const queryCheckUser = 'SELECT * FROM user WHERE email = ?';
    connection.query(queryCheckUser, [email], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error' });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password before saving to the database
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert the user into the database
      const queryInsert = 'INSERT INTO user (email, password, name) VALUES (?, ?, ?)';
      connection.query(queryInsert, [email, hashedPassword, name], (err, results) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ message: 'Error inserting user' });
        }

        // Return success message
        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  },
};

module.exports = ConnController;
