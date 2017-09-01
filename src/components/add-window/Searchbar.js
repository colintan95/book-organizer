import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchResults } from '../../actions';

const SearchbarView = ({ onSearch }) => (
  <div>
    <div style={searchDivStyle}>
      <div style={searchTextStyle}>SEARCH:</div>
        <input style={searchBoxStyle} type="text" id="addWindowSearchbox"
          onKeyDown={e => {
            if (e.keyCode === 13) {
              onSearch(document.getElementById('addWindowSearchbox')
                .value);
            }
          }}/>
        <button style={searchButtonStyle}
          onClick={e => {
            e.preventDefault();
            onSearch(document.getElementById('addWindowSearchbox')
              .value)
          }}/>
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

const mapDispatchToProps = dispatch => ({
  onSearch: searchVal => {
    dispatch(fetchSearchResults(searchVal));
  }
});

const Searchbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchbarView);

export default Searchbar;
