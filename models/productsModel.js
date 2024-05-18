import { Sequelize } from "sequelize";
import db from "../config/database.js";

const  DataType  = Sequelize;

const products = db.define(
    "products",
    {
        image: {
            type: DataType.STRING,
        },
        name: {
            type: DataType.STRING,
        },
        size: {
            type: DataType.STRING,
        },
        price: {
            type: DataType.STRING,
        },
        catagory: {
            type: DataType.STRING,
        },
    },
    {
        freezeTableName: true,
    }
);
export default products;