import { connect } from 'react-redux';
import Tileboard from '../components/Tileboard';

const { Map, List } = require('immutable');

const getActiveTiles = (tiles, activeCat) => {
  if (activeCat === "") {
    // Combines tiles from all categories
    let res = [];
    tiles.map(list => (
      res = res.concat(list.toJS())
    ));
    return List(res);
  }
  else if (tiles.has(activeCat)) {
    return tiles.get(activeCat).toJS();
  }
  else {
    // Active category does not exist
    return [];
  }
};

const mapStateToProps = state => {
  return {
    // IMPT!: tiles is a JS array, NOT immutable
    tiles: getActiveTiles(state.tiles, state.activeCat)
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const ActiveTileboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tileboard);

export default ActiveTileboard;
