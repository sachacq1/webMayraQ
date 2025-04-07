import { register, login } from "../models/authModel.js";
import jwt from "jsonwebtoken";

const Register = async (req, res) => {
    try {
        const { username, password, email, role } = req.body;
        const data = { username, password, email, role };

        const user = await register(data);

        if (user === null) {
            return res.status(400).json({ error: "El usuario ya está registrado" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(201).json({ message: "Usuario registrado con éxito", user, token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const token = await login({ username, password });
        return res.json({ token });

    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
};

export { Register, Login };
