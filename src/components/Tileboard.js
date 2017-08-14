import React from 'react';

import Tile from './Tile';
import TileWindow from './TileWindow';

const Tileboard = ({ tiles }) => (
  <div>
    <div style={tileboardStyle}>
      {tiles.map(tile => (
        <Tile tile={tile}/>
      ))}
    </div>
    <TileWindow/>
  </div>
);

const tileboardStyle = {
  position: 'absolute',
  overflow: 'scroll',
  top: '50px',
  bottom: '0',
  margin: '0px',
  padding: '15px 30px',
};

export default Tileboard;
