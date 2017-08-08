import React from 'react';

const Tile = ({ title, authors }) => (
  <div style={tileStyle}>
    <div style={tileInfoStyle}>
      <div style={tileTitleStyle}>{title}</div>
      <div style={tileAuthorsStyle}>{authors.join()}</div>
    </div>
  </div>
);

const tileStyle = {
  backgroundColor: 'grey',
  float: 'left',
  margin: '0px 20px 40px',
  width: '200px',
  height: '200px',
};

const tileInfoStyle = {
  backgroundColor: 'red',
  margin: '120px 0px 0px',
  padding: '10px',
  width: '180px',
  height: '60px',
};

const tileTitleStyle = {
  fontSize: '12pt',
  margin: '0px',
  padding: '0px',
  width: '100%',
  height: '45px'
};

const tileAuthorsStyle = {
  fontSize: '11pt',
  margin: '0px',
  padding: '0px',
  width: '100%',
  height: '15px'
};

export default Tile;
