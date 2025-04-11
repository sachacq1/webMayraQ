
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
                <section id="inicio" style={{ height: "100vh", background: "#eee" }}>
                    <h2>Inicio</h2>
                </section>
                <section id="servicios" style={{ height: "100vh", background: "#ccc" }}>
                    <h2>Servicios</h2>
                </section>
                <section id="sobremi" style={{ height: "100vh", background: "#aaa" }}>
                    <h2>Sobre mí</h2>
                </section>
                <section id="contacto" style={{ height: "100vh", background: "#888" }}>
                    <h2>Contacto</h2>
                </section>
            </div>

        </>
    );
};

export default Landing;
