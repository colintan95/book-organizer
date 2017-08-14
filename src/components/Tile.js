import React from 'react';

const Tile = ({ tile }) => (
  <div style={tileStyle}>
    <div style={tileInfoStyle}>
      <div style={tileTitleStyle}>{tile.title}</div>
      <div style={tileAuthorsStyle}>{tile.authors.join(', ')}</div>
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
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '11pt',
  margin: '0px',
  padding: '0px',
  width: '100%',
  height: '45px',
  maxHeight: '45px'
};

const tileAuthorsStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '10pt',
  margin: '0px',
  padding: '0px',
  width: '90%',
  height: '20px',
  maxHeight: '20px'
};

export default Tile;
