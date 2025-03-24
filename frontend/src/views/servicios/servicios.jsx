import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Servicios = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '10px' }}>
            <h2 className='text-center m-3'>Servicios</h2>

            <div className='container'>
                <div className="row g-4">

                    {/* Card */}
                    {[
                        {
                            title: "Atención presencial",
                            text: "Sesiones presenciales en un espacio seguro y acogedor.",
                            smallText: "Presencial en Villa Lugano",
                            img: "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2018%2F05%2F24165141%2FPsicologo-1920.jpg?auth=14ea469e805c6ef097b49edf60a17acde56c6a7320240d36e2ba77e2ca97cc92&smart=true&width=1200&height=675&quality=85"
                        },
                        {
                            title: "Atención online",
                            text: "Sesiones de terapia por videollamada desde la comodidad de tu hogar.",
                            smallText: "Sesiones mediante Meet o Zoom",
                            img: "https://www.psicologiasincera.com/wp-content/uploads/2022/03/terapiapsicologicaonline-esefectiva.jpg"
                        },
                        {
                            title: "Atención de adolescentes, jóvenes y adultos",
                            text: "Brindamos sesiones de terapia adaptadas a las necesidades de adolescentes, jóvenes y adultos. Espacios de escucha y acompañamiento profesional para tu bienestar emocional.",
                            smallText: "Adaptado a tus necesidades",
                            img: "https://psicologiaestrella.com/wp-content/uploads/2024/02/terapeuta-infantil.jpg"
                        },
                        {
                            title: "Prepagas y obras sociales por reintegro",
                            text: "Ofrecemos la posibilidad de trabajar con prepagas y obras sociales mediante reintegros. Consulta las condiciones para acceder a la cobertura de tu tratamiento psicológico.",
                            smallText: "Terapia presencial y online",
                            img: "https://blog.elegimejor.net/wp-content/uploads/2025/02/cuanto-cuesta-osde-210-por-mes-min.jpg"
                        }
                    ].map((servicio, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card h-100 d-flex flex-column">
                                <img
                                    src={servicio.img}
                                    className="card-img-top"
                                    alt={servicio.title}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column flex-grow-1">
                                    <h5 className="card-title">{servicio.title}</h5>
                                    <p className="card-text fs-6">{servicio.text}</p>
                                    <p className="card-text mt-auto"><small className="text-body-secondary">{servicio.smallText}</small></p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Servicios;
