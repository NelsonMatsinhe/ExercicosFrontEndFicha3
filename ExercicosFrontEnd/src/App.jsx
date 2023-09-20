

import Inicio from "./paginas/Inicio";
import Acerca from "./paginas/Acerca";
import Contacto from "./paginas/Contacto";
import Servicos from "./paginas/Servicos";
import Exercicios from "./paginas/exercicios";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



 
  function App() {
    return (
      <Inicio/>,
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/exercicios" element={<Exercicios />} />
        </Routes>
      </BrowserRouter>
    );
  }

  

export default App;
