
import Footer from './components/footer/footer'
import Header from './components/header/header'
import './App.css'
import Inicio from './views/inicio/inicio'
import Servicios from './views/servicios/servicios'
import SobreMi from './views/sobreMi/sobreMi'
import Contacto from './views/contacto/contacto'

function App() {

  return (
    <>
      <Header />
      <Inicio />
      <Servicios />
      <SobreMi />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
