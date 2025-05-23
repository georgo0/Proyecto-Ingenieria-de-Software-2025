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
import Curso from './components/student/Curso'; 
import Unidades from './components/student/Unidades';
import Minijuegos from './components/student/Minijuegos';
import Estadísticas from './components/student/Estadisticas';

import MainTeacher from './components/teacher/MainTeacher';
import SelectCourse from './components/teacher/SelectCourse';
import CreateCourse from './components/teacher/CreateCourse';

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
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/minijuegos/:unidadId" element={<Minijuegos />} />
          <Route path="/estadisticas" element={<Estadísticas />} />          
          <Route path="/main-teacher" element={<MainTeacher />} />
          <Route path="/ver-cursos" element={<SelectCourse />} />
          <Route path="/crear-curso" element={<CreateCourse />} />        
        </Routes>
      </Container>
    </>
  );
}

export default App;