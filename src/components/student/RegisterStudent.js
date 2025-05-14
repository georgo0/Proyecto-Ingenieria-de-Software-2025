import React from 'react';
import '../Register.css'; 

function RegisterStudent() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 fondo-register">
      <div className="card p-4 sombra-register" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Registro de Estudiante</h2>
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
          <button type="submit" className="btn btn-success w-100">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterStudent;
