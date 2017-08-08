import React from 'react';

import Tilebar from './Tilebar';
import ActiveTileboard from '../containers/ActiveTileboard';

const TileArea = () => (
  <div style={tileAreaStyle}>
    <Tilebar/>
    <ActiveTileboard/>
  </div>
);

const tileAreaStyle = {
  marginLeft: '300px',
  width: 'auto',
  height: '100%'
};

export default TileArea;
