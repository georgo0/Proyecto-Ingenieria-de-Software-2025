// src/components/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">Bienvenido a la Aplicación</h1>
      <p>Aprende Ingles de forma didáctica.</p>
      <div className="mt-4">
        <Button variant="primary" className="me-3" onClick={() => navigate('/login')}>
          Iniciar Sesión
        </Button>
      </div>
    </Container>
  );
}

export default Home;
