import React from 'react';

import Sidebar from './Sidebar';
import TileArea from './TileArea';

const App = () => (
  <div style={appStyle}>
    <Sidebar/>
    <TileArea/>
  </div>
);

const appStyle = {
  overflow: 'hidden',
  width: 'auto',
  height: '100vh'
};

export default App;
