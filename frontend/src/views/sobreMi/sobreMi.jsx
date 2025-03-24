
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SobreMi = () => {
    return (
        <>
            <div className='bg-light pt-5 mt-5 d-flex'>
                <div className='row  m-4 '>
                    <div className='col md-3 '>
                        <h2>Sobre mi</h2>
                        <p className=' ' style={{}}>
                            Soy Mayra Quinteros, psicóloga clínica con más de 7 años de experiencia en el acompañamiento terapéutico.
                            Me especializo en terapia individual, terapia de pareja y manejo del estrés,
                            utilizando un enfoque integrador que se adapta a las necesidades específicas de cada persona.
                            <br /><br />
                            Mi formación incluye un Máster en Psicología Clínica por la Universidad Complutense de Madrid y
                            diversos cursos de especialización en Terapia Cognitivo-Conductual y Mindfulness.
                            Mi práctica profesional se basa en la empatía, la escucha activa y el respeto por el proceso único de cada individuo.
                            <br /><br />
                            Mi objetivo es crear un espacio seguro donde puedas expresarte libremente y trabajar juntos en desarrollar
                            las herramientas necesarias para afrontar los desafíos emocionales y mejorar tu calidad de vida.
                        </p>
                    </div>

                    <div className='col md-6 justify-content-center align-items-center'>
                        <img src="../../src/assets/photo2.png" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default SobreMi