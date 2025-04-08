import axios from "axios";

const loginUser = async (email, password) => {
    try {
        const response = await axios.post("https://webmayraq.onrender.com/users/login", {
            email,
            password
        });
        return response.data; // importante retornar los datos
    } catch (error) {
        throw new Error("Credenciales incorrectas");
    }
};

const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post("https://webmayraq.onrender.com/users/register", {
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
