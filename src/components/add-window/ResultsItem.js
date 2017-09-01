import { connect } from 'react-redux';

import ResultsItemView from './views/ResultsItemView';
import { fetchBookInfo } from '../../actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  onClick: id => {
    dispatch(fetchBookInfo(id, true));
  }
});

const ResultsItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsItemView);

export default ResultsItem;
