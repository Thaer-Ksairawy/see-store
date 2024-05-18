import { Sequelize } from "sequelize";

const db = new Sequelize("bfwdq3zsyabghzejc1oo", "ueyxqsw2wkjqajzf", "OXPdqQ0Xfo0xL5nll0Np", {
    host: "bfwdq3zsyabghzejc1oo-mysql.services.clever-cloud.com",
    port: 3306,
    dialect: "mysql",
  });


db
    .authenticate()
    .then(() => {
        console.log(' connection has been  established successfuly')
    })
    .catch((err) => {
        console.log(' unable to connect')
    })
export default db;