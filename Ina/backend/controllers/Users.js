import Users from "../models/UserModel.js"; // Ensure the .js extension is included
import bcrypt from "bcrypt"; // Import bcrypt for hashing passwords
import jwt from "jsonwebtoken";

// ... existing code ...

// Function to get a user by ID
export const getUserById = async (req, res) => {
    const { id } = req.params; // Get the user ID from the request parameters

    try {
        const user = await Users.findOne({
            where: { id },
            attributes: ['id', 'name', 'email'] // Specify the attributes to return
        });

        // Check if user is found
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json(user); // Return the user details
    } catch (error) {
        console.log("Error retrieving user:", error);
        res.status(500).json({ message: "Error retrieving user" });
    }
};

// ... existing code ...

// Function to get all users
export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email'] // Specify the attributes to return
        }); // Get all users from the database
        res.json(users); // Return the list of users
    } catch (error) {
        console.log("Error retrieving users:", error);
        res.status(500).json({ message: "Error retrieving users" });
    }
};

// Function to register a user
export const Register = async (req, res) => {
    const { name, email, password, confPassword } = req.body;

    // Validate password
    if (password !== confPassword) {
        return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await Users.create({
            name,
            email,
            password: hashPassword,
        });
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log("Registration error:", error);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

// Function to login a user
export const Login = async (req, res) => {
    try {
        // Using findOne to find user by email
        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });

        // Check if user is found
        if (!user) {
            return res.status(404).json({ msg: "Email tidak ditemukan" });
        }

        // Check password match
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(400).json({ msg: "Password salah" });
        }

        const userId = user.id;
        const name = user.name;
        const email = user.email;

        // Create access token
        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "20s"
        });

        // Create refresh token
        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d"
        });

        // Update refresh token in database
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });

        // Set cookie for refresh token
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        // Send access token as response
        res.json({ accessToken });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ msg: "Terjadi kesalahan saat login" });
    }
};

// Function to logout a user
export const Logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken; // Get the refresh token from cookies

        if (!refreshToken) {
            return res.sendStatus(204); // No content, already logged out
        }

        // Remove the refresh token from the database
        await Users.update({ refresh_token: null }, {
            where: {
                refresh_token: refreshToken
            }
        });

        // Clear the cookie
        res.clearCookie('refreshToken');

        // Send response
        res.status(200).json({ msg: "Logout successful" });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ msg: "Terjadi kesalahan saat logout" });
    }
};
