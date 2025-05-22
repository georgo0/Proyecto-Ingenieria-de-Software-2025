// components/RegisterTeacher.js

/*import React from 'react';
import '../Register.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function RegisterTeacher() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">Registro Profesor</h2>
          <Form>
            <Form.Group controlId="formFullName">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control type="password" placeholder="Confirma tu contraseña" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Text className="text-muted">
                Este formulario es exclusivo para profesores.
              </Form.Text>
            </Form.Group>

            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" type="submit">
                Registrarse como Profesor
              </Button>
            </div>

            <div className="mt-3 text-center">
            <a href="./login">¿Ya tienes una cuenta? Inicia sesión</a>

            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterTeacher;
*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../Register.css';

function RegisterTeacher() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 sombra-register" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Registro de Profesor</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="name" placeholder="Tu nombre completo" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Crea una contraseña" />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirma tu contraseña" />
          </div>
          <small className="text-muted d-block mb-3">Este formulario es exclusivo para profesores.</small>
          <button type="submit" className="btn btn-success w-100">Registrarse como Profesor</button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterTeacher;
