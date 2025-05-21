import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Curso() {
  const [nombreCurso, setNombreCurso] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const curso = localStorage.getItem('nombreCurso');
    if (curso) {
      setNombreCurso(curso);
    }
  }, []);

  const opciones = [
    { nombre: 'Actividades', ruta: '/actividades' },
    { nombre: 'Estadísticas', ruta: '#' },
    { nombre: 'Lista de curso', ruta: '#' },
    { nombre: 'Volver al inicio', ruta: '/' },
  ];

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Bienvenido a tu curso {nombreCurso}</h2>

      <div className="d-flex flex-column gap-4 align-items-center mt-4">
        {opciones.map((op, index) => (
          <div
            key={index}
            className="p-4 border rounded w-75"
            style={{ cursor: 'pointer', backgroundColor: '#f5f5f5' }}
            onClick={() => {
              if (op.ruta !== '#') navigate(op.ruta);
            }}
          >
            <h4>{op.nombre}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curso;
