import React from 'react';
import { connect } from 'react-redux';

import { closeTileWindow } from '../actions';

const TileWindowCloseView = ({ onClick }) => (
  <div style={buttonStyle}
    onClick={e => {
      e.preventDefault();
      onClick();
    }}>
  </div>
);

const buttonStyle = {
  backgroundColor: 'yellow',
  position: 'absolute',
  top: '5px',
  left: '585px',
  width: '20px',
  height: '20px'
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(closeTileWindow());
  }
});

const TileWindowClose = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileWindowCloseView);

export default TileWindowClose;
