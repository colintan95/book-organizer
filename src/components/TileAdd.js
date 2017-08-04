import React from 'react';
import { connect } from 'react-redux';

let TileAdd = ({ dispatch }) => (
  <div style={tileAddStyle}>

  </div>
);

TileAdd = connect()(TileAdd);

const tileAddStyle = {
  backgroundColor: 'grey',
  width: '30px',
  height: '30px',
}

export default TileAdd;
