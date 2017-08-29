const { Map, List } = require('immutable');

const infoWindow = (state = Map({ isActive: false }), action) => {
  switch(action.type) {
    case 'UPDATE_INFOWINDOW':
      return state.mergeWith((oldVal, newVal) => oldVal, {
        title: action.title,
        authors: List(action.authors),
        description: action.description
      });
    case 'OPEN_INFOWINDOW':
      return state.set('isActive', true);
    case 'CLOSE_INFOWINDOW':
      return state.set('isActive', false);
    default:
      return state;
  }
};

export default infoWindow;
