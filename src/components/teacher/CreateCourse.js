// src/components/CreateCourse.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateCourse() {
  const navigate = useNavigate();
  const [courseLevel, setCourseLevel] = useState('');
  const [year, setYear] = useState('');
  const [schoolName, setSchoolName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Curso creado:', { courseLevel, year, schoolName });
    // Aquí se podría guardar la información en el backend más adelante
    navigate('/main-teacher');
  };

  // Solo permitir números en el input de año
  const handleYearChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setYear(value);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Crear un nuevo curso</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Nivel del curso (1 a 6)</label>
            <input
              type="number"
              className="form-control form-control-sm"
              min="1"
              max="6"
              value={courseLevel}
              onChange={(e) => setCourseLevel(e.target.value)}
              required
              placeholder="Ej: 3"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Año</label>
            <input
              type="text"
              className="form-control form-control-sm"
              value={year}
              onChange={handleYearChange}
              required
              placeholder="Ej: 2025"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre del colegio</label>
          <input
            type="text"
            className="form-control"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            placeholder="Ej: Escuela N°123"
            // Evaluar si mantener este campo de <nombre_colegio> en el futuro o eliminarlo y ver donde redirige el boton del formulario
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Crear curso</button>
      </form>
    </div>
  );
}

export default CreateCourse;
