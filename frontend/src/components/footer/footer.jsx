import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
    return (
        <footer className="bg-light py-4 position-static-bottom">
            <div className="container  ">
                <div className="row justify-content-between ">
                    {/* Sección de Mayra Quinteros */}
                    <div className="col-md-3 mb-3">
                        <h5 className='fs-4'>Mayra Quinteros</h5>
                        <p className="fw-lighter">Psicóloga clínica especializada en terapia individual, terapia de pareja y manejo del estrés.</p>
                        <div className=' d-flex justify-content-evenly '>
                            <i class="bi bi-instagram "></i>
                            <i class="bi bi-facebook "></i>
                            <i class="bi bi-linkedin "></i>
                        </div>

                    </div>

                    {/* Sección de Servicios */}
                    <div className="col-md-3 mb-3">
                        <h5 className='fs-4'>Servicios</h5>
                        <ul className="list-unstyled fw-lighter">
                            <li>Terapia Individual Online</li>
                            <li>Terapia Individual Presencial</li>
                            <li>Terapia de Pareja</li>
                            <li>Asesoramiento en Crisis</li>
                        </ul>
                    </div>

                    {/* Sección de Contacto */}
                    <div className="col-md-3 mb-3">
                        <h5 className='fs-4'>Contacto</h5>
                        <ul className="list-unstyled fw-lighter">
                            <li><i class="bi bi-whatsapp text-danger me-3"></i>+34 612 345 678</li>
                            <li><i class="bi bi-envelope-at text-danger me-3"></i>contacto@mayraquinteros.com</li>
                            <li><i class="bi bi-geo-alt text-danger me-3"></i>Av. Principal 123, Madrid, España</li>
                            <li><i class="bi bi-clock text-danger me-3"></i>Lun - Vie: 9:00 - 19:00</li>
                        </ul>
                    </div>


                    {/* Sección de Reserva */}

                    <div className="col-md-3 mb-3text-center">
                        <h5 className='fs-4'>Agenda una consulta</h5>
                        <p className="fw-lighter">¿Necesitas ayuda? Programa una consulta conmigo para comenzar tu proceso de terapia.</p>
                        <button className="btn btn-danger w-100">Reservar ahora</button>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
