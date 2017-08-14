import React from 'react';

const TileWindow = ({ tile }) => (
  <div style={windowStyle}>

  </div>
);

const windowStyle = {
  visibility: 'hidden',
  backgroundColor: 'green',
  position: 'fixed',
  marginTop: '-200px',
  marginLeft: '-300px',
  top: '50%',
  left: '50%',
  width: '600px',
  height: '400px'
};

export default TileWindow;
