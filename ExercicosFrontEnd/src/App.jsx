import HelloWorld from "./Componentes/HelloWorld";
import CicloDeVida from "./Componentes/CicloDeVida ";
import NomeIdade from "./Componentes/NomeIdade";
import ListaDeTarefas from "./Componentes/ListaDeTarefas";
import RenderizacaoCondicional from "./Componentes/RenderizacaoCondicional";
import Contador from "./Componentes/Contador";
import Cabeçalho from "./Componentes/Cabeçalho";
import Inicio from "./paginas/Inicio";
import Acerca from "./paginas/Acerca";
import Contacto from "./paginas/Contacto";
import Servicos from "./paginas/Servicos";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
 

  return (
   //<HelloWorld/>
    //<CicloDeVida/>
    //<NomeIdade/>
    //<ListaDeTarefas/>
   // <RenderizacaoCondicional/>
   // <Contador/>
   <Cabeçalho/>,
   <BrowserRouter>
   <Routes>
    <Route>
    <Route path="/" exact component={<Inicio/>} />
          <Route path="/acerca" component={<Acerca/>} />
          <Route path="/contacto" component={<Contacto/>} />
          <Route path="/servicos" component={<Servicos/>} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
