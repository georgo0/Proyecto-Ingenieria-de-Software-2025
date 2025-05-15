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

        </Routes>
      </Container>
    </>
  );
}

export default App;