import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Login from './components/Login';
import RegisterStudent from './components/student/RegisterStudent';
import RegisterTeacher from './components/teacher/RegisterTeacher';
import Dashboard from './components/Dashboard';
import MainStudent from './components/student/MainStudent';
import IngresarCodigo from './components/student/IngresarCodigo';
import Curso from './components/student/Curso'; // Ajusta la ruta si es necesario
import Actividades from './components/student/Actividades';


function App() {
  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-student" element={<RegisterStudent />} />
          <Route path="/register-teacher" element={<RegisterTeacher />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/main-student" element={<MainStudent />} />
          <Route path="/ingresar-codigo" element={<IngresarCodigo />} />
          <Route path="/curso" element={<Curso />} />
          <Route path="/actividades" element={<Actividades/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;