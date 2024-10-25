import jwt from "jsonwebtoken";
import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
// ... existing code ...

// Function to get a user by ID
export const getUserById = async (req, res) => {
    const { id } = req.params; // Get the user ID from the request parameters

    try {
        const user = await Users.findOne({
            where: { id },
            attributes: ['id', 'name', 'username'] // Specify the attributes to return
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
            attributes: ['id', 'name', 'username'] // Specify the attributes to return
        }); // Get all users from the database
        res.json(users); // Return the list of users
    } catch (error) {
        console.log("Error retrieving users:", error);
        res.status(500).json({ message: "Error retrieving users" });
    }
};

// Function to register a user
export const Register = async (req, res) => {
    const { name, username, password, confPassword } = req.body;

    // Validate password
    if (password !== confPassword) {
        return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await Users.create({
            name,
            username,
            password: hashPassword,
        });
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log("Registration error:", error);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};
export const Login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Cari pengguna berdasarkan username
        const user = await Users.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: "Username tidak ditemukan" });
        }

        // Validasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Password salah" });
        }

        // Buat token akses dan refresh jika login berhasil
        const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

        // Simpan refresh token ke dalam database
        await Users.update({ refresh_token: refreshToken }, { where: { id: user.id } });

        // Kirimkan token akses dan refresh sebagai respon
        res.json({ accessToken, refreshToken });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Terjadi kesalahan internal" });
    }
};

// Pastikan model User sudah benar diimpor
// export const Login = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await Users.findOne({ where: { username } });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: "Invalid password" });
//         }

//         const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
//         const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

//         await Users.update({ refresh_token: refreshToken }, { where: { id: user.id } });

//         res.json({ accessToken, refreshToken });
//     } catch (error) {
//         console.error("Login error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

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
