import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate()

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand onClick={()=>{navigate("/")}}  >Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate("/about")}}>Skills</Nav.Link>
          <Nav.Link  onClick={()=>{navigate("/project")}}>Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
