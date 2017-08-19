
const infoWindowActive = (state = false, action) => {
  switch(action.type) {
    case 'OPEN_INFOWINDOW':
      return true;
    case 'CLOSE_INFOWINDOW':
      return false;
    default:
      return state;
  }
};

export default infoWindowActive;
