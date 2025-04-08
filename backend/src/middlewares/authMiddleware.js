import jwt from "jsonwebtoken";
import User from "../models/authModel.js";
//process.loadEnvFile();

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1] // Obtener el token del encabezado Authorization

    if (!token) {
        return res.status(401).json({ error: "Acceso no autorizado" });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: "token invalido" });
    }
}

// Verificar si el usuario es un administrador
const isadmin = async (req, res, next) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ error: "Acceso no autorizado. Usuario no autenticado." });
        }

        const user = await User.findById(req.user.id);

        if (!user || user.role !== "admin") {
            return res.status(403).json({ error: "Acceso no autorizado. Se requiere rol de administrador." });
        }

        next();
    } catch (error) {
        console.error("Error en isadmin:", error);
        res.status(500).json({ error: "Error al verificar el rol del usuario" });
    }
};

export { auth, isadmin }