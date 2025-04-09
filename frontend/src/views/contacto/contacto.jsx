import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Contacto = () => {
    return (
        <div className="card-body py-5">
            <h2 className="text-center mb-5">Contacto</h2>

            <div className="row gy-4 ">
                {/* Card con información de contacto */}
                <div className="col-lg-5">
                    <div className=" bg-light p-4 m-5 border rounded shadow-sm ">

                        <div className="card-body justify-content-center">
                            <h5 className="card-title py-3">Información de Contacto</h5>
                            <ul className="list-unstyled fw-lighter">

                                <li className="d-flex align-items-center mb-3">
                                    <i className="bi bi-whatsapp fs-1 text-danger me-3"></i>
                                    <div className="d-flex flex-column align-items-start">
                                        <span className="fs-6">Teléfono</span>
                                        <span className="fs-6">+34 612 345 678</span>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <i className="bi bi-envelope-at fs-1 text-danger me-3"></i>
                                    <div className='d-flex flex-column align-items-start'>
                                        <span className='fs-6'>Email</span>
                                        <span className='fs-6'>contacto@mayraquinteros.com</span>
                                    </div></li>

                                <li className="d-flex align-items-center mb-3">
                                    <i className="bi bi-envelope-at fs-1 text-danger me-3"></i>
                                    <div className='d-flex flex-column align-items-start'>
                                        <span className='fs-6' >Dirección</span>
                                        <span className='fs-6'>Av. Principal 123, Madrid, España</span>
                                    </div>
                                </li>


                                <li className="d-flex align-items-center">
                                    <i className="bi bi-clock fs-1 text-danger me-3"></i>
                                    <div className='d-flex flex-column align-items-start'>
                                        <span className='fs-6'>Horario</span>
                                        <span className='fs-6'>Lun - Vie: 9:00 - 19:00</span>

                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div >

                {/* Formulario de contacto */}
                < div className="col-md-7 m-auto" >
                    <div className="container">
                        <div className="card-body bg-white p-4 border rounded shadow-sm">
                            <h5 className="card-title">Envía un Mensaje</h5>
                            <p className="card-subtitle mb-4 text-muted">Completa el formulario y me pondré en contacto contigo lo antes posible.</p>
                            <form>
                                <div className='drow'>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" required />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="apellido" className="form-label">Apellido</label>
                                        <input type="text" className="form-control" id="apellido" required />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                    <textarea className="form-control" id="mensaje" rows="4" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-danger">Enviar mensaje</button>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Contacto;