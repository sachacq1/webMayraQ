import { Routes, Route } from "react-router-dom";
import App from "../App";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useAuth } from "../context/authContext";
import PrivateRoutes from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import { PacienteDetalle } from "../views/pacientes/pacientes";
import PacienteEditar from "../views/pacientes/pacienteEditar.jsx";
import Login from "../views/login/login.jsx";
import Register from "../views/register/register.jsx";
import Inicio from "../views/inicio/inicio.jsx";
import Servicios from "../views/servicios/servicios.jsx";
import SobreMi from "../views/sobreMi/sobreMi.jsx";
import Contacto from "../views/contacto/contacto.jsx";

const AppRouter = () => {
    return (
        <>
            <Header />

            <Routes>
                {/* Rutas públicas accesibles siempre */}
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/sobremi" element={<SobreMi />} />
                <Route path="/contacto" element={<Contacto />} />

                {/* Rutas de autenticación */}
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                {/* Rutas privadas solo para usuarios logueados */}
                <Route
                    path="/pacientes/:id"
                    element={
                        <PrivateRoutes>
                            <PacienteDetalle />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/pacientes/editar/:id"
                    element={
                        <PrivateRoutes>
                            <PacienteEditar />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/panel"
                    element={
                        <PrivateRoutes>
                            <App />
                        </PrivateRoutes>
                    }
                />
            </Routes>

            <Footer />
        </>
    );
};

export { AppRouter };
