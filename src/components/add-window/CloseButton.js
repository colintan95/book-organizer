import React from 'react';
import { connect } from 'react-redux';

import { closeAddWindow } from '../../actions';

const CloseButtonView = ({ onClick }) => (
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(closeAddWindow());
  }
});

const CloseButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(CloseButtonView);

export default CloseButton;
