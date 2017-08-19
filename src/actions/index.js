export const addTile = info => ({
  type: 'ADD_TILE',
    ...info
});

export const openInfoWindow = tile => ({
  type: 'OPEN_INFOWINDOW'
});

export const closeInfoWindow = () => ({
  type: 'CLOSE_INFOWINDOW'
});

export const openAddWindow = () => ({
  type: 'OPEN_ADDWINDOW'
});

export const closeAddWindow = () => ({
  type: 'CLOSE_ADDWINDOW'
});
