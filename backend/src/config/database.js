import { Sequelize } from "sequelize";

// process.loadEnvFile();
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "mayrawebdb";
const MYSQL_USER = process.env.MYSQL_USER || "mayraDB_web";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "";
const MYSQL_HOST = process.env.MYSQL_HOST;


const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        connectTimeout: 60000, // ⏳ Espera hasta 60 segundos antes de fallar
    }
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log("No se pudo conectar a la base de datos", error);
    }
};

export { connectDb, sequelize }