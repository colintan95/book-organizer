import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Tile from '../Tile';

const TileboardView = ({ tiles, tileWindowActive }) => (
  <div>
    <div style={tileboardStyle}>
    <ReactCSSTransitionGroup
      transitionName="tiles"
      transitionEnterTimeout={500}>
      {tiles.map(tile => (
        <Tile tile={tile}/>
      ))}
    </ReactCSSTransitionGroup>
    </div>
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

export default TileboardView;
