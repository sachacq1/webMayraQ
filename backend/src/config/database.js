import { Sequelize } from "sequelize";

// process.loadEnvFile();




const sequelize = new Sequelize("mayraqDB", "root", "", {
    host: "localhost",
    dialect: "mysql"
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