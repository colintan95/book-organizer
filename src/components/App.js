import React from 'react';

import Sidebar from './Sidebar';
import Tileboard from './Tileboard';

const App = () => (
  <div style={appStyle}>
    <Sidebar/>
    <Tileboard/>
  </div>
);

const appStyle = {
  overflow: 'hidden',
  width: 'auto',
  height: '100vh'
};

export default App;
