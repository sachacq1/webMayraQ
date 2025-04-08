import { connectDb } from "./src/config/mongoDB.js";
import express from "express";
import { authRoutes } from "./src/routes/authRoutes.js";
import { pacientesRoutes } from "./src/routes/pacientesRoutes.js";
import { auth } from "./src/middlewares/authMiddleware.js";
import helmet from "helmet"
import cors from "cors"


//process.loadEnvFile();
const PORT = process.env.PORT || 3000;

app.use(cors(
    {
        origin: "https://web-mayra-q.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    }
))

const app = express();
app.use(express.json());
app.use(helmet());



app.use("/auth", authRoutes)
app.use(auth)
app.use("/api/pacientes", pacientesRoutes)
app.use("/*", (req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
})



connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor en puerto ${PORT}`);
    });
});