const { Map, List } = require('immutable');

const infoWindow = (state = Map({ isActive: false }), action) => {
  switch(action.type) {
    case 'UPDATE_INFOWINDOW':
      return state.mergeWith((oldVal, newVal) => newVal, {
        title: action.title,
        authors: List(action.authors),
        description: action.description,
        imageUrl: action.imageUrl
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
