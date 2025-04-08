import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./context/authContext.jsx";
import { AdminPacientesList } from "./views/Admin/dashboard.jsx";
import Login from "./views/login/login.jsx"
import Inicio from "./views/inicio/inicio";
import Servicios from "./views/servicios/servicios";
import SobreMi from "./views/sobreMi/sobreMi";
import Contacto from "./views/contacto/contacto";
import "./App.css";

const App = () => {
  const { logout, role, authToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken && window.location.pathname !== "/login") {
      navigate("/login");
    }
  }, [authToken, navigate]);

  const handleLogout = () => {
    logout();
    alert("Sesión cerrada con éxito");
    navigate("/login");
  };

  return (
    <>
      {authToken && <Header />}

      <div className="container py-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1 className="text-center mb-4">Lista de Pacientes</h1>
                <div className="card p-3 shadow-sm">
                  <AdminPacientesList />
                </div>

                {/* Botón Cerrar sesión */}
                <div className="text-center mt-4">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </div>
          } />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>

      {authToken && <Footer />}
    </>
  );
};

export default App;
