import { Routes, Route } from "react-router-dom";
import Inicio from "./views/inicio/inicio.jsx";
import Servicios from "./views/servicios/servicios.jsx";
import SobreMi from "./views/sobreMi/sobreMi.jsx";
import Contacto from "./views/contacto/contacto.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {

  return (

    <>
      <Header />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Inicio />} /> {/* Ruta por defecto */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;
