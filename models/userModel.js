import { Sequelize } from "sequelize";
import db from "../config/database.js";

const  DataType  = Sequelize;

const user = db.define(
    "users",
    {
        name: {
            type: DataType.TEXT,
            allowNull: false,
        },
        email: {
            type: DataType.TEXT,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataType.TEXT,
            allowNull: false,
        },
        role:{
            type: DataType.BOOLEAN,
            allowNull: true,
        }
});
export default  user;