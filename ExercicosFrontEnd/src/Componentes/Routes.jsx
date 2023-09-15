
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from "./paginas/Inicio";
import Acerca from "./paginas/Acerca";
import Contacto from "./paginas/Contacto";
import Servicos from "./paginas/Servicos";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const Routes = () => {
  return (
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
  );
};

export default Routes;
