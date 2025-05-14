// src/components/Login.js

/*import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login:', { email, password });
    // Aquí podrías llamar a una API para autenticar
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
*/

import React from 'react';
import './Login.css'; // Importamos estilos personalizados si queremos

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 fondo-login">
      <div className="card p-4 sombra-login" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
