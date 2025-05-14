/*
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import RegisterTeacher from './components/teacher/RegisterTeacher';

function App() {
  return ( 
    <>
      <Navbar bg="dark" variant="dark" expand="lg">   
        <Container>
          <Navbar.Brand as={Link} to="/">App de ingles</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Registro</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
*/

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from './components/Home';
import Login from './components/Login';
import RegisterStudent from './components/student/RegisterStudent';
import Dashboard from './components/Dashboard';
import RegisterTeacher from './components/teacher/RegisterTeacher';

function App() {
  return ( 
    <>
      <Navbar bg="dark" variant="dark" expand="lg">   
        <Container>
          <Navbar.Brand as={Link} to="/">App de ingles</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register-student">Registro Alumno</Nav.Link>
              <Nav.Link as={Link} to="/register-teacher">Registro Profesor</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-student" element={<RegisterStudent />} />
          <Route path="/register-teacher" element={<RegisterTeacher />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
