import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

//process.loadEnvFile();

const URI = process.env.MONGO_URI;
let client;

export const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("✅ Conectado a MongoDB con Mongoose");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error.message);
        process.exit(1);
    }
};
export const getDB = () => {
    if (!client) {
        throw new Error("No se pudo obtener la base de datos")
    }
    return client.db();
}