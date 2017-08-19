import React from 'react';
import { connect } from 'react-redux';

import { closeInfoWindow } from '../actions';

const InfoWindowCloseView = ({ onClick }) => (
  <div>
    <button style={buttonStyle}
      onClick={e => {
        e.preventDefault();
        onClick();
    }}/>
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
    dispatch(closeInfoWindow());
  }
});

const InfoWindowClose = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoWindowCloseView);

export default InfoWindowClose;
