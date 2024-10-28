const util = require('util');
const connection = require('../config/database');

// Convert connection.query to promise-based for async/await
const query = util.promisify(connection.query).bind(connection);

const DashboardController = {
  getDashboardData: async (req, res) => {
    const userEmail = req.user.email;

    if (!userEmail) {
      return res.status(400).json({ message: 'Invalid user email' });
    }

    try {
      const results = await query('SELECT * FROM user WHERE email = ?', [userEmail]);

      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        message: `Hello, ${results[0].name}. Welcome to your dashboard.`,
        dashboardData: {
          stats: [10, 20, 30], // Example static data
          userInfo: {
            id: results[0].id,
            name: results[0].name,
            email: results[0].email,
          },
        },
      });
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      res.status(500).json({ message: 'Error fetching data from database' });
    }
  },
};

module.exports = DashboardController;
