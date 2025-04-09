import { Route, Router } from "react-router-dom";
import Inicio from "../views/inicio/inicio";
import Servicios from "../views/servicios/servicios";
import SobreMi from "../views/sobreMi/sobreMi";
import Contacto from "../views/contacto/contacto";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Footer />
      </Router>
    </>

  )

}


export default App;
