import { connect } from 'react-redux';

import TileView from './views/TileView';
import { openInfoWindow } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    tile: props.tile
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(openInfoWindow(props.tile));
    }
  };
};

const Tile = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileView);

export default Tile;
