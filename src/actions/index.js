export const addTile = info => {
  return {
    type: 'ADD_TILE',
    ...info
  }
};

export const openTileWindow = tile => {
  return {
    type: 'OPEN_TILEWINDOW'
  }
};

export const closeTileWindow = () => {
  return {
    type: 'CLOSE_TILEWINDOW'
  }
};
