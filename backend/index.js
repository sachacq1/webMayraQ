import { connectDb } from "./src/config/database.js";
import express from "express";
import { authRoutes } from "./src/routes/authRoutes.js";
import { auth } from "./src/middlewares/authMiddleware.js";


// process.loadEnvFile();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());


app.use("/auth", authRoutes)
app.use(auth)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    connectDb();
})