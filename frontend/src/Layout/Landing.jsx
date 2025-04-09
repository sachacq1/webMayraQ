import Inicio from "../views/inicio/inicio";
import Servicios from "../views/servicios/servicios";
import SobreMi from "../views/sobreMi/sobreMi";
import Contacto from "../views/contacto/contacto";

const Landing = () => {
    return (
        <>
            <div id="inicio">
                <Inicio />
            </div>

            <div id="servicios">
                <Servicios />
            </div>

            <div id="sobremi">
                <SobreMi />
            </div>

            <div id="contacto">
                <Contacto />
            </div>

        </>
    );
};

export default Landing;
