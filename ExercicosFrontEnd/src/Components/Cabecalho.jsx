import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cabeçalho() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Matsinhy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/servicos">Serviços</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contato</Nav.Link>
            <Nav.Link as={Link} to="/acerca">Sobre nós</Nav.Link>
            <Nav.Link as={Link} to="/exercicios">Exercícios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

 
  
export default  Cabeçalho