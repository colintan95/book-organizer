import React from 'react';

import Tile from './Tile';

const Tileboard = ({ tiles }) => (
  <div style={tileboardStyle}>
    {tiles.map(tile => (
      <Tile title={tile.title} authors={tile.authors}/>
    ))}
  </div>
);

const tileboardStyle = {
  margin: '0px',
  padding: '15px 30px',
};

export default Tileboard;
