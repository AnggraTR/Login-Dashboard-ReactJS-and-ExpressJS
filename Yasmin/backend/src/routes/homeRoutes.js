'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
          }
          .container {
            text-align: center;
          }
          .logo {
            font-size: 48px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
          }
          .message {
            font-size: 24px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">U-ROOM</div>
          <div class="message">Welcome to U-Room Services API</div>
        </div>
      </body>
    </html>
  `);
});

module.exports = router; // Ekspor router
