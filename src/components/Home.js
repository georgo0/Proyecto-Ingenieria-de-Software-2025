// src/components/Home.js
import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BackgroundLayout from './BackgroundLayout'; // Asegúrate de que la ruta sea correcta
function Home() {
  const navigate = useNavigate();

  return (
    <BackgroundLayout>
      {/* Título principal centrado */}
      <Container className="text-center mt-5 mb-4">
        <h1>¡Bienvenido a nuestra aplicación!</h1>
        <p className="lead">Diviertete mientras aprendes ingles.</p>
      </Container>

      {/* Registro de profesores y alumnos */}
      <Container className="d-flex justify-content-center align-items-start gap-4 mb-5">
        <Card style={{ width: '18rem' }}>
          <Card.Body className="text-center">
            <Card.Title>Registro para Profesores</Card.Title>
            <Card.Text>
              Para registrarse como profesor haga click aquí.
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/register-teacher')}>
              Registrarse
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body className="text-center">
            <Card.Title>Registro para Alumnos</Card.Title>
            <Card.Text>
              Para registrar la cuenta de un alumno haga click aquí.
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/register-student')}>
              Registrarse
            </Button>
          </Card.Body>
        </Card>
      </Container>

      {/* Login más abajo */}
      <Container className="d-flex justify-content-center mt-4 mb-5">
        <Card className="text-center w-50">
          <Card.Body>
            <Card.Title>¿Ya tienes cuenta?</Card.Title>
            <Card.Text>
              Accede aquí con tu cuenta institucional.
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/login')}>
              Iniciar sesión
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </BackgroundLayout>
  );
}

export default Home;
