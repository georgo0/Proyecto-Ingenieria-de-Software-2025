import React, { useEffect, useState } from 'react';

function Actividades() {
  const [nivelCurso, setNivelCurso] = useState(null);

  useEffect(() => {
    const codigo = localStorage.getItem('codigoCurso');
    if (codigo) {
      const match = codigo.match(/^(\d)[A-Z]-\d{4}$/);
      if (match) {
        setNivelCurso(parseInt(match[1]));
      }
    }
  }, []);

  const unidadesPorNivel = {
    4: [
      'Food',
      'Space',
      'Summer',
    ],
    5: [
      'City',
      'School',
      'Animals',
    ],
  };

  const unidades = unidadesPorNivel[nivelCurso] || [];

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Unidades para {nivelCurso}º Básico</h2>

      <div className="d-flex flex-column align-items-center gap-3">
        {unidades.map((unidad, index) => (
          <div
            key={index}
            className="p-4 border rounded w-75"
            style={{
              backgroundColor: '#d9f1ff',
              cursor: 'pointer',
              transition: '0.3s',
              fontWeight: 'bold',
            }}
            onClick={() => {
              // Aquí luego puedes redirigir a otra ruta o mostrar contenido
              alert(`Haz seleccionado: ${unidad}`);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c4e3ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d9f1ff';
            }}
          >
            {unidad}
          </div>
        ))}
      </div>

      {nivelCurso === null && (
        <p className="mt-4 text-danger">No se ha detectado el curso correctamente.</p>
      )}
    </div>
  );
}

export default Actividades;
