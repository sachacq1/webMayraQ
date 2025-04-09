import { Routes, Route } from "react-router-dom";
import Inicio from "./views/inicio/inicio.jsx";
import Servicios from "./views/servicios/servicios.jsx";
import SobreMi from "./views/sobreMi/sobreMi.jsx";
import Contacto from "./views/contacto/contacto.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {

  return (
    <div className="container mt-4">
      <h1>Bienvenido al Panel Privado</h1>
      <p>Acá iría tu dashboard o lo que quieras que solo vea la psicóloga.</p>
    </div>
  );
};

export default App;
