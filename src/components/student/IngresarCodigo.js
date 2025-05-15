import React, { useState } from 'react';

function IngresarCodigo() {
  const [codigo, setCodigo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica cuando se envía el código
    console.log('Código ingresado:', codigo);
    // Por ejemplo, después puedes validar o redirigir
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Ingresar código para acceder a un curso</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="codigo" className="form-label">Código del curso</label>
          <input
            type="text"
            id="codigo"
            className="form-control"
            placeholder="Ingresa el código"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  );
}

export default IngresarCodigo;
