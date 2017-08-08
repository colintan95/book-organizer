import React from 'react';

const Tile = ({ title }) => (
  <div style={tileStyle}>
    {title}
  </div>
);

const tileStyle = {
  float: 'left',
  margin: '0px 20px 40px',
  backgroundColor: 'grey',
  width: '200px',
  height: '200px',
};

export default Tile;
