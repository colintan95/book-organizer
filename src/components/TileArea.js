import React from 'react';

import Tilebar from './Tilebar';
import Tileboard from './Tileboard';

const TileArea = () => (
  <div style={tileAreaStyle}>
    <Tilebar/>
    <Tileboard/>
  </div>
);

const tileAreaStyle = {
  marginLeft: '300px',
  width: 'auto',
  height: '100%'
};

export default TileArea;
