import { connect } from 'react-redux';

import TileAreaView from './views/TileAreaView';

const mapStateToProps = state => ({
  infoWindowActive: state.infoWindow.get('isActive'),
  addWindowActive: state.addWindowActive
});

const mapDispatchToProps = dispatch => ({

});

const TileArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileAreaView);

export default TileArea;
