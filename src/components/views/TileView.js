import React from 'react';

const TileView = ({ tile, onClick }) => (
  <div style={tileStyle}
    onClick={e => {
      e.preventDefault();
      onClick();
    }}>
    <div style={infoDivStyle}>
      <div style={titleStyle}>{tile.title}</div>
      <div style={authorsStyle}>{tile.authors.join(', ')}</div>
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

const infoDivStyle = {
  backgroundColor: 'red',
  margin: '120px 0px 0px',
  padding: '10px',
  width: '180px',
  height: '60px',
};

const titleStyle = {
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

const authorsStyle = {
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

export default TileView;
