import { connect } from 'react-redux';

import TileView from './views/TileView';
import { openTileWindow } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    tile: props.tile
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(openTileWindow(props.tile));
    }
  };
};

const Tile = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileView);

export default Tile;
