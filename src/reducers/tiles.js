const { Map, List } = require('immutable');

const tiles = (state = Map(), action) => {
  switch(action.type) {
    case 'ADD_TILE':
      return state.update(action.category, (arr = List()) => arr.push(Map({
            'isbn': action.isbn,
            'title': action.title,
            'authors': List(action.authors)
          }))
        );
    default:
      return state;
  }
};

export default tiles;
