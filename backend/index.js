import { connectDb } from "./src/config/database.js";
import express from "express";
import { authRoutes } from "./src/routes/authRoutes.js";
import { pacientesRoutes } from "./src/routes/pacientesRoutes.js";
import { auth } from "./src/middlewares/authMiddleware.js";
import helmet from "helmet"


// process.loadEnvFile();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(helmet());


app.use("/auth", authRoutes)
app.use("/pacientes", pacientesRoutes)
app.use(auth)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    connectDb();
})