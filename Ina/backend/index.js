import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import cookieParser from "cookie-parser";
// import { refreshToken } from "../controllers/RefreshToken.js"; // Adjust the path as necessary

import Users from "./models/UserModel.js"; // Pastikan model ini sudah ada
import router from "./routes/index.js"; // Mengimpor router dari routes/index.js
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
    
    // Membuat tabel berdasarkan model
    await db.sync(); // Pastikan ini memanggil model yang benar

    console.log('Tabel telah dibuat');
} catch (error) {
    console.error('Database connection error:', error);
}
app.use(cookieParser());
app.use(express.json());

// CORS setup (if needed)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // Adjust the origin as necessary
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(router); // Menggunakan router yang diimpor

app.listen(3000, () => console.log('Server running at port 3000'));
