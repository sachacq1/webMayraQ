import User from "../models/authModel.js";

const register = async (req, res) => {
    try {

        const { username, password, email } = req.body;
        const newUser = await User.register({ username, password, email })
        if (!newUser) {
            return res.status(400).json({ error: "El usuario ya existe" })
        }

        res.status(200).json({ "message": "Usuario creado exitosamente" })
    }

    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error al crear el usuario" })
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.login(username, password);

        if (!user) {
            return res.status(400).json({ error: "Nombre de usuario o contraseña incorrectos" })
        }
        res.status(200).json({ "message": "Login exitoso", "token": user.token })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: "Error interno en el servidor" })

    }
};

export { register, login }