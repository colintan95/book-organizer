import React from 'react';
import { connect } from 'react-redux';

const SearchbarView = () => (
  <div>
    <div style={searchDivStyle}>
      <div style={searchTextStyle}>SEARCH:</div>
      <input style={searchBoxStyle} type="test" id="tilebarSearchbox"/>
      <button style={searchButtonStyle}/>
    </div>
  </div>
);

const searchDivStyle = {
  width: '400px',
  height: '60px',
};

const searchTextStyle = {
  fontSize: '14pt',
  textAlign: 'center',
  float: 'left',
  paddingTop: '5px',
  width: '80px',
  height: '25px'
};

const searchBoxStyle = {
  float: 'left',
  fontSize: '10pt',
  marginTop: '0px',
  marginLeft: '10px',
  paddingLeft: '5px',
  width: '200px',
  height: '24px'
};

const searchButtonStyle = {
  top: '0px',
  width: '30px',
  height: '30px',
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const Searchbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchbarView);

export default Searchbar;
