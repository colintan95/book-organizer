import React from 'react';
import { connect } from 'react-redux';

let SidebarAdd = ({ dispatch }) => (
  <div style={sidebarAddStyle}>
  </div>
);

SidebarAdd = connect()(SidebarAdd);

const sidebarAddStyle = {
  width: '30px',
  height: '30px',
  backgroundColor: 'grey'
};

export default SidebarAdd;
