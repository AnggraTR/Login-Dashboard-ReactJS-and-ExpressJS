import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js"; // Import the database configuration


// Define the Users model 
const Users = db.define('users', {
    name: {
        type: DataTypes.STRING,
       
    },
    email: {
        type: DataTypes.STRING,
       
    },
    password: {
        type: DataTypes.STRING,
        
    },
    refresh_token: {
        type: DataTypes.TEXT, // Optional field for storing refresh tokens
    },
}, {
    freezeTableName: true // Prevents Sequelize from pluralizing the table name
});

// Export the Users model
export default Users;