import React from 'react';
import { connect } from 'react-redux';

import { openAddWindow } from '../actions';

const TilebarView = ({ onButtonClick }) => (
  <div style={tilebarStyle}>
    <input style={searchBoxStyle} type="test" name="bookSearch"/>
    <button style={searchButtonStyle}
      onClick={e => {
        e.preventDefault();
        onButtonClick();
      }}/>
  </div>
);

const tilebarStyle = {
  backgroundColor: 'yellow',
  margin: '0px',
  padding: '10px',
  height: '30px',
};

const searchBoxStyle = {
  fontSize: '10pt',
  float: 'left',
  marginLeft: '10px',
  paddingLeft: '5px',
  top: '0px',
  width: '200px',
  height: '24px'
};

const searchButtonStyle = {
  width: '30px',
  height: '30px',
  margin: 'auto 0'
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => {
    dispatch(openAddWindow());
  }
});

const Tilebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TilebarView);

export default Tilebar;
