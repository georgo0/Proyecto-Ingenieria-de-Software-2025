import React from 'react';

const BackgroundLayout = ({ children }) => {
  const wallpaperStyle = {
    background: 'linear-gradient(#80FFDB, #5390D9)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    paddingTop: '50px',
    paddingBottom: '50px',
  };

  return (
    <div style={wallpaperStyle}>
      {children}
    </div>
  );
};

export default BackgroundLayout;
