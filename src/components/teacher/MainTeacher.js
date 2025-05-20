// src/components/MainTeacher.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainTeacher() {
  const navigate = useNavigate();

  const wallpaperStyle = {
    //backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/950/516/946/flag-britain-color-texture-wallpaper-preview.jpg)', //xddd
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    paddingTop: '50px',
    paddingBottom: '50px',
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px', ...wallpaperStyle }}>
      <h2 className="text-center mb-4">Bienvenido, profesor</h2>

      <div className="d-flex flex-column gap-4">
        <div
          className="p-4 border rounded text-center"
          style={{ cursor: 'pointer', backgroundColor: '#e9f7ef' }}
          onClick={() => navigate('/crear-curso')} // cambiar la ruta cuando se tengas
        >
          <h4>Crear un nuevo curso</h4>
        </div>

        <div
          className="p-4 border rounded text-center"
          style={{ cursor: 'pointer', backgroundColor: '#e3f2fd' }}
          onClick={() => navigate('/ver-cursos')} // cambiar la ruta cuando se tengas
        >
          <h4>Ver mis cursos</h4>
        </div>
      </div>
    </div>
  );
}

export default MainTeacher;
