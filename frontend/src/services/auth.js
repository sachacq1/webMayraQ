import axios from "axios";

const loginUser = async (email, password) => {
    try {
        const response = await axios.post("https://webmayraq.onrender.com/auth/login", {
            username,
            password
        });
        return response.data; // importante retornar los datos
    } catch (error) {
        throw new Error("Credenciales incorrectas");
    }
};

const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post("https://webmayraq.onrender.com/auth/register", {
            username,
            email,
            password
        });
        return response.data; // o simplemente: return true;
    } catch (error) {
        throw new Error("Error al registrar usuario");
    }
};

export { loginUser, registerUser };
