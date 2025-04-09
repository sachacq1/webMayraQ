import { useState } from "react";
import { loginUser } from "../../services/auth.js";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser(username, password);
            if (response.token) {
                login(response.token);
                navigate("/panel");
            } else {
                alert("El login falló. Intenta de nuevo.");
            }
        } catch (error) {
            console.error("Error en el inicio de sesión", error);
            alert("Error en el inicio de sesión. Verifica tus credenciales.");
        }
    };

    return (
        <div className="container pt-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <button
                        className="btn btn-outline-secondary  w-100 mb-2"
                        onClick={() => navigate("/")}
                    >
                        ← Volver a la página principal
                    </button>

                    <h1 className="text-center mb-4">Iniciar sesión</h1>
                    <div className="card p-4 shadow">
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label">Usuario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de usuario"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-2">
                                Iniciar sesión
                            </button>
                            <Link to="/register" className="btn btn-outline-secondary w-100">
                                ¿No tienes cuenta? Regístrate
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
