import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from '../../context';
import { NavItem } from 'react-bootstrap';
import styled from 'styled-components';

const LeftNavContainer = styled.div`
margin-left : auto;
`;


function BasicExample() {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token")
    navigate("/")

  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Krapy Arena</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
        </Nav>
        {state.data && (
          <LeftNavContainer>
            <NavItem>
              <Nav.Link onClick={handleLogout}>logout</Nav.Link>
            </NavItem>
          </LeftNavContainer>
        )}
      </Container>
    </Navbar>
  );
}

export default BasicExample;