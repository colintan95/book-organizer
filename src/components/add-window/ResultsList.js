import React from 'react';
import { connect } from 'react-redux';

const ResultsListView = () => (
  <div style={listDivStyle}>
  </div>
);

const listDivStyle = {
  width: '560px',
  height:' 300px'
};

const ResultsList = connect(

)(ResultsListView);

export default ResultsList;
