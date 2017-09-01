import React from 'react';

import InfoWindowClose from '../InfoWindowClose';

const InfoWindowView = ({ title, authors, description, imageUrl }) => (
  <div>
    <div style={backgroundStyle}></div>
    <div style={windowStyle}>
      <div style={coverDivStyle}>
        <img style={coverImageStyle} alt='Cover Unavailable'
          src={imageUrl}/>
      </div>
      <div style={mainInfoStyle}>
        <div style={mainOutlineStyle}>
          <div style={mainTitleStyle}>
            {title}
          </div>
          <div style={mainAuthorsStyle}>
            {typeof(authors) !== 'undefined' && authors.join(', ')}
          </div>
        </div>
        <div style={mainDescStyle}>
          {description}
        </div>
      </div>
      <InfoWindowClose/>
    </div>
  </div>
);

// Translucent background
const backgroundStyle = {
  backgroundColor: 'white',
  opacity: '0.5',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%'
};

const windowStyle = {
  opacity: '1',
  backgroundColor: 'green',
  position: 'fixed',
  marginTop: '-200px',
  marginLeft: '-300px',
  padding: '20px',
  paddingRight: '30px',
  top: '50%',
  left: '50%',
  width: '560px',
  height: '360px'
};

const coverDivStyle = {
  float: 'left',
  width: '160px',
  height: '160px',
};

const coverImageStyle = {
  display: 'block',
  margin: '0 auto',
  maxWidth: '160px',
  maxHeight: '160px',
};

const mainInfoStyle = {
  marginLeft: '180px',
  marginTop: '10px'
};

const mainOutlineStyle = {
  height: '140px'
};

const mainTitleStyle = {
  overflow: 'scroll',
  fontSize: '16pt',
  lineHeight: '1.2',
  maxHeight: '80px',
};

const mainAuthorsStyle = {
  overflow: 'scroll',
  fontSize: '11pt',
  lineHeight: '1.2',
  marginTop: '10px',
  maxHeight: '40px'
};

const mainDescStyle = {
  overflow: 'scroll',
  fontSize: '11pt',
  lineHeight: '1.3',
  borderTop: '1px black solid',
  paddingTop: '10px',
  maxHeight: '180px'
};

export default InfoWindowView;
