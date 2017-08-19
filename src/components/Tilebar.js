import React from 'react';

import TileAdd from './TileAdd'

const Tilebar = () => (
  <div style={tilebarStyle}>
    <TileAdd/>
  </div>
);

const tilebarStyle = {
  backgroundColor: 'yellow',
  margin: '0px',
  padding: '10px',
  height: '30px',
};

export default Tilebar;
