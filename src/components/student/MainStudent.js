import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainStudent() {
      const navigate = useNavigate();
    

const wallpaperStyle = {
    backgroundImage: 'https://c4.wallpaperflare.com/wallpaper/950/516/946/flag-britain-color-texture-wallpaper-preview.jpg',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',  // que ocupe toda la altura de la ventana
    paddingTop: '50px',
    paddingBottom: '50px',
  };


  return (
    <div className="container mt-5" style={{ maxWidth: '600px', ...wallpaperStyle }}>
      <h2 className="text-center mb-4">Bienvenido, estudiante</h2>

      <div className="d-flex flex-column gap-4">
        <div
          className="p-4 border rounded text-center"
          style={{ cursor: 'pointer', backgroundColor: '#e9f7ef' }}
          onClick={() => navigate('/ingresar-codigo')}
        >
          <h4>Ingresar código para acceder a un curso</h4>
        </div>

        <div
          className="p-4 border rounded text-center"
          style={{ cursor: 'pointer', backgroundColor: '#e3f2fd' }}
          // onClick={() => { /* aquí luego va la lógica para ir a mi curso */ }}
        >
          <h4>Mi curso</h4>
        </div>
      </div>
    </div>
  );
}

export default MainStudent;
