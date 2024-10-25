import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.refreshToken || req.headers['authorization']?.split(' ')[1]; // Adjust based on how you send tokens

    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided." });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token." });
        }
        req.user = user; // Store user information in request for future use
        next(); // Continue to the next middleware or route handler
    });
};
