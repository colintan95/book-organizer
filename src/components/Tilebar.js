import React from 'react';
import { connect } from 'react-redux';

import { openAddWindow, fetchSearchResults } from '../actions';

const TilebarView = ({ onSearch }) => (
  <div style={tilebarStyle}>
    <input style={searchBoxStyle} type="test" id="tilebarSearchbox"
      onKeyDown={e => {
        if (e.keyCode === 13) {
          onSearch(document.getElementById('tilebarSearchbox').value);
        }
      }}/>
    <button style={searchButtonStyle}
      onClick={e => {
        e.preventDefault();
        onSearch(document.getElementById('tilebarSearchbox').value);
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
  onSearch: searchValue => {
    dispatch(openAddWindow());
    dispatch(fetchSearchResults(searchValue));
  }
});

const Tilebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TilebarView);

export default Tilebar;
