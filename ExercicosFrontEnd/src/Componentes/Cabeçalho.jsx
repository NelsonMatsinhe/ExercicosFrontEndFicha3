 
 

  import { Link } from 'react-router-dom';
  
  function Cabeçalho(){
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/acerca">Acerca</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
 
  
export default  Cabeçalho