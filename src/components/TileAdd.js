import React from 'react';
import { connect } from 'react-redux';

import { addTile } from '../actions';

let TileAddView = ({ onClick }) => (
  <div style={buttonStyle}
    onClick = {e => {
      e.preventDefault();

      onClick();
    }}>
  </div>
);

const buttonStyle = {
  backgroundColor: 'grey',
  width: '30px',
  height: '30px',
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(addTile({
        'title': 'Superforecasting',
        'authors': ['Peter Tetlock'],
        'category': 'Economics'
      }))
    }
  }
};

const TileAdd = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileAddView);


export default TileAdd;
