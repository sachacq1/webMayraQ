
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/login/login";
import Register from "../views/register/register";
import Inicio from "../views/inicio/inicio";
import Servicios from "../views/servicios/servicios";
import SobreMi from "../views/sobreMi/sobreMi";
import Contacto from "../views/contacto/contacto";
import App from "../App";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useAuth } from "../context/authContext";
import PrivateRoutes from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

const AppRouter = () => {
    const { authToken } = useAuth();

    return (
        <BrowserRouter>
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
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/sobremi" element={<SobreMi />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
            {authToken && <Footer />}
        </BrowserRouter>
    );
};

export { AppRouter };
