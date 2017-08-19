
const tileWindowActive = (state = false, action) => {
  switch(action.type) {
    case 'OPEN_TILEWINDOW':
      return true;
    case 'CLOSE_TILEWINDOW':
      return false;
    default:
      return state;
  }
};

export default tileWindowActive;
