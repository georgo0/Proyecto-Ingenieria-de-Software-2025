// src/components/Login.js

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
