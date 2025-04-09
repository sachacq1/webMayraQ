import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="bg-light py-5">
            <div className="container-fluid px-5">
                <div className="row justify-content-between gy-4">
                    {/* Sección de Mayra Quinteros */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <h5 className="fs-4">Mayra Quinteros</h5>
                        <p className="fw-lighter">
                            Psicóloga clínica especializada en terapia individual, terapia de pareja y manejo del estrés.
                        </p>
                        <div className="d-flex gap-3">
                            <i className="bi bi-instagram fs-5"></i>
                            <i className="bi bi-facebook fs-5"></i>
                            <i className="bi bi-linkedin fs-5"></i>
                        </div>
                    </div>

                    {/* Sección de Servicios */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <h5 className="fs-4">Servicios</h5>
                        <ul className="list-unstyled fw-lighter">
                            <li>Terapia Individual Online</li>
                            <li>Terapia Individual Presencial</li>
                            <li>Terapia de Pareja</li>
                            <li>Asesoramiento en Crisis</li>
                        </ul>
                    </div>

                    {/* Sección de Contacto */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <h5 className="fs-4">Contacto</h5>
                        <ul className="list-unstyled fw-lighter">
                            <li><i className="bi bi-whatsapp text-danger me-2"></i>+34 612 345 678</li>
                            <li><i className="bi bi-envelope-at text-danger me-2"></i>contacto@mayraquinteros.com</li>
                            <li><i className="bi bi-geo-alt text-danger me-2"></i>Av. Principal 123, Madrid, España</li>
                            <li><i className="bi bi-clock text-danger me-2"></i>Lun - Vie: 9:00 - 19:00</li>
                        </ul>
                    </div>

                    {/* Sección de Reserva */}
                    <div className="col-12 col-sm-6 col-lg-3 text-center text-lg-start">
                        <h5 className="fs-4">Agenda una consulta</h5>
                        <p className="fw-lighter">
                            ¿Necesitas ayuda? Programa una consulta conmigo para comenzar tu proceso de terapia.
                        </p>
                        <button className="btn btn-danger w-100">Reservar ahora</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
