const express = require("express");
const cors = require("cors");
const ConnRoutes = require("./routes/ConnRoutes");
const loginHandler = require("./controllers/loginhendel");

const app = express();
const port = 3000;

// Middleware to allow CORS (Should be declared before routes)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Login route
app.post("/login", loginHandler.login);

// Routes
app.use("/api", ConnRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
