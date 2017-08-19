import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Tilebar from '../Tilebar';
import Tileboard from '../Tileboard';
import InfoWindow from '../InfoWindow';
import AddWindow from '../AddWindow';

const TileArea = ({ infoWindowActive, addWindowActive }) => (
  <div style={tileAreaStyle}>
    <Tilebar/>
    <Tileboard/>
    <ReactCSSTransitionGroup
      transitionName="infoWindow"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {infoWindowActive === true &&
        <InfoWindow/>
      }
    </ReactCSSTransitionGroup>
    <ReactCSSTransitionGroup
      transitionName="addWindow"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {infoWindowActive === true &&
        <AddWindow/>
      }
    </ReactCSSTransitionGroup>
  </div>
);

const tileAreaStyle = {
  marginLeft: '300px',
  width: 'auto',
  height: '100%'
};

export default TileArea;
