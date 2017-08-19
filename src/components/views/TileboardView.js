import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Tile from '../Tile';
import TileWindow from '../TileWindow';

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
    <ReactCSSTransitionGroup
      transitionName="tileWindow"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {tileWindowActive === true &&
        <TileWindow/>
      }
    </ReactCSSTransitionGroup>
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
