const dbConnection = require("../config/database");

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  // Query to select user details
  const query =
    "SELECT username, name, photo FROM users WHERE username = ? AND password = ?";

  dbConnection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).send("Internal server error");
    }

    // Check if user exists and return user details
    if (results.length > 0) {
      const user = results[0];
      return res.status(200).json({
        message: "Login successful",
        user: {
          username: user.username,
          name: user.name,
          photo: user.photo,
        },
      });
    } else {
      return res.status(401).send("Invalid username or password");
    }
  });
};
