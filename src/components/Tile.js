import { connect } from 'react-redux';

import TileView from './views/TileView';
import { updateInfoWindow, openInfoWindow } from '../actions';

const { toJS } = require('immutable');

const mapStateToProps = (state, props) => {
  return {
    tile: props.tile
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(updateInfoWindow({
        title: props.tile.title,
        authors: props.tile.authors,
        description: props.tile.description,
        imageUrl: props.tile.imageUrl
      }));
      dispatch(openInfoWindow());
    }
  };
};

const Tile = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileView);

export default Tile;
