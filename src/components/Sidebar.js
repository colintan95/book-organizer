import React from 'react';

import SidebarAdd from './SidebarAdd';

const Sidebar = () => (
  <div style={sidebarStyle}>
    <SidebarAdd/>
  </div>
);

const sidebarStyle = {
  float: 'left',
  padding: '30px',
  width: '240px',
  height: '100%',
  backgroundColor: 'red'
}

export default Sidebar;
