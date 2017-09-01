import { connect } from 'react-redux';

import InfoWindowView from './views/InfoWindowView';

const { toJS } = require('immutable');

const mapStateToProps = state => {
  return ({
    title: state.infoWindow.get('title'),
    authors: state.infoWindow.get('authors').toJS(),
    description: state.infoWindow.get('description'),
    imageUrl: state.infoWindow.get('imageUrl')
  });
}

const mapDispatchToProps = dispatch => ({});

const InfoWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoWindowView);

export default InfoWindow;
