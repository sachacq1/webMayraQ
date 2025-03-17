import jwt from "jsonwebtoken";
process.loadEnvFile();

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

export { auth }