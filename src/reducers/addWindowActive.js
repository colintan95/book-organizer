
const addWindowActive = (state = false, action) => {
  switch(action.type) {
    case 'OPEN_ADDWINDOW':
      return true;
    case 'CLOSE_ADDWINDOW':
      return false;
    default:
      return state;
  }
};

export default addWindowActive;
