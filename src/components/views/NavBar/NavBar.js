import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return(
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
    <Container>
        <Navbar.Brand href="/">Blog.app</Navbar.Brand>
        <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
    </Container>
</Navbar>
  );
};

export default NavBar;