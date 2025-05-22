import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../BackgroundLayout';

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
    { nombre: 'Unidades 📔', ruta: '/unidades' },
    { nombre: 'Estadísticas 🥇', ruta: '/estadisticas' },
    { nombre: 'Mis puntajes  💯', ruta: '#' },
    { nombre: 'Volver al inicio 🏠', ruta: '/' },
  ];


  return (
        <BackgroundLayout>

    <div className="container mt-5 text-center">
      <h2 className="mb-4">Bienvenido a tu curso {nombreCurso}</h2>

      <div className="d-flex flex-column gap-4 align-items-center mt-4">
        {opciones.map((op, index) => (
          <div
            key={index}
            className="p-4 border rounded w-75"
            style={{
              cursor: op.ruta !== '#' ? 'pointer' : 'default',
              backgroundColor: '#e0ffe0',
              borderColor: '#c0e0c0',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => {
              if (op.ruta !== '#') navigate(op.ruta);
            }}
          >
            <h4>{op.nombre}</h4>
          </div>
        ))}
      </div>
    </div>
        </BackgroundLayout>

  );
}

export default Curso;
