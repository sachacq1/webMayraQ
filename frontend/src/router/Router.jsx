import App from "../App";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useAuth } from "../context/authContext";
import PrivateRoutes from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import { PacienteDetalle } from "../views/pacientes/pacientes";
import { Routes, Route } from "react-router-dom";
import PacienteEditar from "../views/pacientes/pacienteEditar.jsx";


const AppRouter = () => {
    const { authToken } = useAuth();

    return (
        <>
            {authToken && <Header />}
            <Routes>
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
                <Route
                    path="/"
                    element={
                        <PrivateRoutes>
                            <App />
                        </PrivateRoutes>
                    }
                />
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

                <Route path="/inicio" element={<Inicio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/sobremi" element={<SobreMi />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
            {authToken && <Footer />}
        </>

    );
};

export { AppRouter };
