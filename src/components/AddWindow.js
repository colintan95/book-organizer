import React from 'react';
import { connect } from 'react-redux';

import AddWindowView from './add-window/views/AddWindowView';
import { closeAddWindow } from '../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const AddWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWindowView)

export default AddWindow;
