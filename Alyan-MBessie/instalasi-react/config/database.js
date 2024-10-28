const mysql = require("mysql2");

// Create the connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost", // Your MySQL host
  user: "root", // Your MySQL user
  password: "", // Your MySQL password
  database: "db_users", // Your MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

module.exports = connection;
