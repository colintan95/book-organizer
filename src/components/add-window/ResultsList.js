import React from 'react';
import { connect } from 'react-redux';

import ResultsItem from './ResultsItem';

const { List } = require('immutable');

const ResultsListView = ({ results }) => (
  <div style={listDivStyle}>
    {results.map(result => (
      <ResultsItem bookInfo={result.toObject()}/>
    ))}
  </div>
);

const listDivStyle = {
  overflow: 'scroll',
  width: '560px',
  maxHeight: '280px'
};

const mapStateToProps = state => {
  if (state.searchResults.get('isValid')) {
    return {
      results: state.searchResults.get('results')
    }
  }
  else {
    return {
      results: List()
    }
  }
};

const mapDispatchToProps = dispatch => ({});

const ResultsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsListView);

export default ResultsList;
