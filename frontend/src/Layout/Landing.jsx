
import { useEffect } from "react";
import Inicio from "../views/inicio/inicio";
import Servicios from "../views/servicios/servicios";
import SobreMi from "../views/sobreMi/sobreMi";
import Contacto from "../views/contacto/contacto";

const Landing = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                    // Opcional: quitar el hash del URL para que no quede feo
                    window.history.replaceState(null, null, window.location.pathname);
                }, 100);
            }
        }
    }, []);
    return (
        <>
            <div style={{ marginTop: "80px" }}>
                <section id="inicio" >
                    <Inicio />
                </section>
                <section id="servicios" >
                    <hServicios />
                </section>
                <section id="sobremi" >
                    <SobreMi />
                </section>
                <section id="contacto" >
                    <Contacto />
                </section>
            </div>

        </>
    );
};

export default Landing;
