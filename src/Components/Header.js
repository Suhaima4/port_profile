import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about">Skills</Nav.Link>
          <Nav.Link href="/project">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
