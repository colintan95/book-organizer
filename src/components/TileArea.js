import React from 'react';
import { connect } from 'react-redux';

import TileAreaView from './views/TileAreaView';

const mapStateToProps = state => ({
  infoWindowActive: state.infoWindowActive,
  addWindowActive: state.addWindowActive
});

const mapDispatchToProps = dispatch => ({

});

const TileArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileAreaView);

export default TileArea;
