import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import CORS package
import router from "./routes/index.js";

dotenv.config();

const app = express();

// Initialize database connection
const initializeDatabase = async () => {
    try {
        await db.authenticate();
        console.log('Database Connected');
        await db.sync(); 
        console.log('Tabel telah dibuat');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

initializeDatabase();

app.use(cookieParser());
app.use(express.json());

// CORS setup
app.use(cors({
    origin: 'http://localhost:3000', // Set URL frontend yang diizinkan
    credentials: true                // Izinkan pengiriman cookie dan header otorisasi
}));

// Routes
app.use(router);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start server
app.listen(5000, () => console.log('Server running at port 5000'));
