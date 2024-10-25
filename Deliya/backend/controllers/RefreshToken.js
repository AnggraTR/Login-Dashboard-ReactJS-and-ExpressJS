import Users from '../models/UserModel.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken || req.body.token; // Get refresh token from cookie or request body

    if (!refreshToken) {
        return res.status(401).json({ message: "Refresh Token is required." });
    }

    try {
        const user = await Users.findOne({ where: { refresh_token: refreshToken } });
        if (!user) {
            return res.status(403).json({ message: "Refresh Token is invalid." });
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Invalid Refresh Token." });
            }
            const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
            res.json({ accessToken });
        });
    } catch (error) {
        console.error("Refresh token error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
