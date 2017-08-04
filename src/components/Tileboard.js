import React from 'react';

import Tile from './Tile'

const Tileboard = () => (
  <div style={tileboardStyle}>
    <Tile/>
    <Tile/>
    <Tile/>
    <Tile/>
  </div>
);

const tileboardStyle = {
  marginLeft: '300px',
  padding: '30px',
  width: 'auto',
  height: '100%'
};

export default Tileboard;
