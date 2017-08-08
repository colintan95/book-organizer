import React from 'react';
import { connect } from 'react-redux';

import { addTile } from '../actions';

let TileAdd = ({ dispatch }) => (
  <div style={tileAddStyle}
    onClick = {e => {
      e.preventDefault();

      dispatch(addTile({
        'title': 'Superforecasting',
        'authors': ['Peter Tetlock'],
        'category': 'Economics'
      }));
    }}
  >
  </div>
);

TileAdd = connect()(TileAdd);

const tileAddStyle = {
  backgroundColor: 'grey',
  width: '30px',
  height: '30px',
}

export default TileAdd;
