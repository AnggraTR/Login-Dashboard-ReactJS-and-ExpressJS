import { Sequelize } from "sequelize";

const db = new Sequelize('db_pertemuan7', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;



