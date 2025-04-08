import { connectDb } from "./src/config/mongoDB.js";
import express from "express";
import { authRoutes } from "./src/routes/authRoutes.js";
import { pacientesRoutes } from "./src/routes/pacientesRoutes.js";
import { auth } from "./src/middlewares/authMiddleware.js";
import helmet from "helmet"
import cors from "cors"


//process.loadEnvFile();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
    "http://localhost:5173",
    "https://web-mayra-q.vercel.app"
];

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors(
    {
        origin: allowedOrigins,
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


connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor en puerto ${PORT}`);
    });
});