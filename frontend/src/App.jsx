
import { AdminPacientesList } from "./views/Admin/dashboard.jsx";
import Panel from "./views/panel/panel.jsx";

const App = () => {

  return (
    <>
      <div className="container mt-4">
        <h1>Bienvenido al Panel Privado</h1>
        <p>Acá iría tu dashboard o lo que quieras que solo vea la psicóloga.</p>
        <Panel />
      </div>
    </>
  );
};

export default App;
