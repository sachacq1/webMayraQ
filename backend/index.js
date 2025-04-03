import { connectDb } from "./src/config/database.js";
import express from "express";
import { authRoutes } from "./src/routes/authRoutes.js";
import { pacientesRoutes } from "./src/routes/pacientesRoutes.js";
import { auth } from "./src/middlewares/authMiddleware.js";
import helmet from "helmet"
import cors from "cors"


process.loadEnvFile();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors(
    {
        origin: "https://web-mayra-q.vercel.app/",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }
))


app.use("/auth", authRoutes)
app.use("/api/pacientes", pacientesRoutes)
app.use("/*", (req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
})
app.use(auth)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    connectDb();
})