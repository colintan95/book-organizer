import React from 'react';
import { connect } from 'react-redux';

import ResultsItemView from './views/ResultsItemView';

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = (dispatch, props) => ({

});

const ResultsItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsItemView);

export default ResultsItem;
