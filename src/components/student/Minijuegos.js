import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackgroundLayout from '../BackgroundLayout';
function Minijuegos() {
  const { unidadId } = useParams();
  const [nivelCurso, setNivelCurso] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const codigo = localStorage.getItem('codigoCurso');
    if (codigo) {
      const match = codigo.match(/^([4-6])[A-Z]-\d{4}$/);
      if (match) {
        setNivelCurso(parseInt(match[1]));
      }
    }
  }, []);

  const juegosPorNivelYUnidad = {
    4: {
      food: ['Memoria de Comida', 'Emparejar imágenes'],
      space: ['Trivia del Espacio', 'Vocabulario en órbita'],
      summer: ['Juego de Ropa de Verano', 'Arrastrar y Soltar']
    },
    5: {
      city: ['Completa la frase', 'Encuentra el lugar'],
      school: ['Ordena las palabras', 'Trivia escolar'],
      animals: ['Sonidos de animales', 'Trivia de animales']
    }
  };

  const juegos = (juegosPorNivelYUnidad[nivelCurso] || {})[unidadId] || [];

  return (
    <BackgroundLayout>
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Minijuegos para la unidad: {unidadId}</h2>

        <div className="d-flex justify-content-center">
          <div
            className="d-flex flex-row gap-3 overflow-auto px-2 pb-3"
            style={{
              maxWidth: '100%',
              whiteSpace: 'nowrap',
            }}
          >
            {juegos.map((juego, index) => (
              <div
                key={index}
                className="card text-center p-3"
                style={{
                  minWidth: '200px',
                  backgroundColor: '#e0ffe0',
                  cursor: 'pointer',
                  transition: '0.3s',
                  fontWeight: 'bold',
                  flex: '0 0 auto',
                }}
                onClick={() => {
                  alert(`Acceder a: ${juego}`);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#c2f0c2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#e0ffe0';
                }}
              >
                {juego}
              </div>
            ))}
          </div>
        </div>

        {nivelCurso === null && (
          <p className="mt-4 text-danger text-center">No se detectó correctamente el curso.</p>
        )}
      </div>
    </BackgroundLayout>
  );
}

export default Minijuegos;
