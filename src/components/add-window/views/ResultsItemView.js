import React from 'react';

const ResultsItemView = ({ bookInfo, onClick }) => (
  <div style={itemDivStyle}>
    <img style={imgStyle} src={bookInfo.imageUrl}/>
    <div style={infoDivStyle}>
      <div style={titleStyle}>
        {bookInfo.title}
      </div>
      <div style={authorStyle}>
        {bookInfo.author}
      </div>
      <button style={addButtonStyle}/>
    </div>
  </div>
);

const itemDivStyle = {
  clear: 'both',
  borderTop: 'solid black 1px',
  padding: '10px',
  height: '80px'
};

const imgStyle = {
  float: 'left',
  maxWidth: '60px',
  maxHeight: '80px'
};

const infoDivStyle = {
  marginLeft: '70px'
};

const titleStyle = {
  fontSize: '12pt',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginTop: '5px',
};

const authorStyle = {
  fontSize: '10pt',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginTop: '5px',
};

const addButtonStyle = {
  float: 'right',
  marginTop: '10px',
  width: '60px',
  height: '20px'
};

export default ResultsItemView;
