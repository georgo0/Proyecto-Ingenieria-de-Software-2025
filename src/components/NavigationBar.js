// src/components/NavigationBar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">App de inglés</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Ítems a la izquierda */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>

          {/* Ítems a la derecha */}
          <Nav className="ms-auto align-items-center">

            {/* Botón de Login */}
            <Nav.Link as={Link} to="/login">
              <Button variant="outline-light" size="sm">Login</Button>
            </Nav.Link>

            {/* Dropdown de registro */}
            <NavDropdown title="Registrarse" id="nav-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/register-student">Como Alumno</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register-teacher">Como Profesor</NavDropdown.Item>
            </NavDropdown>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
