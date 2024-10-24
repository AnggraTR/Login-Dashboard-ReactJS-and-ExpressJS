import Users from "../models/UserModel.js"; // Ensure the correct file extension is used
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        // Check if refresh token exists
        if (!refreshToken) return res.sendStatus(401);

        // Find user based on refresh token
        const user = await Users.findOne({
            where: {
                refresh_token: refreshToken
            }
        });

        // Check if user was found
        if (!user) return res.sendStatus(403);

        // Verify the refresh token
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);

            const userId = user.id; // Directly access user properties
            const name = user.name;
            const email = user.email;

            // Create a new access token
            const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '24h' // Set expiration time for the access token
            });

            // Send the access token as a response
            res.json({ accessToken });
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.sendStatus(500); // Send a 500 status code for server errors
    }
};
