import { Routes, Route } from "react-router-dom";
import App from "../App";
import { useAuth } from "../context/authContext";
import PrivateRoutes from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import { PacienteDetalle } from "../views/pacientes/pacientes";
import PacienteEditar from "../views/pacientes/pacienteEditar.jsx";
import Login from "../views/login/login.jsx";
import Register from "../views/register/register.jsx";
import LayoutPublico from "../Layout/LayoutPublico.jsx";
import Landing from "../Layout/Landing.jsx";
import Panel from "../views/panel/panel.jsx";
import AdminPacientesList from "../views/Admin/AdminPacientesList.jsxx";
import AdminPacientesAdd from "../views/Admin/AdminPacienteAdd.jsx";

const AppRouter = () => {
    return (
        <>

            <Routes>
                {/* Layout general para todas las páginas públicas */}
                <Route element={<LayoutPublico />}>
                    <Route path="/" element={<Landing />} />
                </Route>


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

                <Route
                    path="/panel"
                    element={
                        <PrivateRoutes>
                            <Panel />
                        </PrivateRoutes>
                    }
                />

                <Route
                    path="/panel/lista"
                    element={
                        <PrivateRoutes>
                            <AdminPacientesList />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/panel/agregar"
                    element={
                        <PrivateRoutes>
                            <AdminPacientesAdd />
                        </PrivateRoutes>
                    }
                />

            </Routes>

        </>
    );
};

export { AppRouter };
