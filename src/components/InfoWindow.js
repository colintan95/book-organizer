import React from 'react';

import InfoWindowClose from './InfoWindowClose';

const InfoWindow = ({ tile }) => (
  <div>
    <div style={backgroundStyle}></div>
    <div style={windowStyle}>
      <div style={coverStyle}>

      </div>
      <div style={mainInfoStyle}>
        <div style={mainOutlineStyle}>
          <div style={mainTitleStyle}>The Smartest Guys in the Room</div>
          <div style={mainAuthorsStyle}>Bethany Mclean, Peter Elkind</div>
        </div>
        <div style={mainDescStyle}>
          The Enron scandal brought down one of the most admired companies of the 1990s. Countless books and articles were written about it, but only The Smartest Guys in the Room holds up a decade later as the definitive narrative. For this tenth anniversary edition, McLean and Elkind have revisited the fall of Enron and its aftermath, in a new chapter that asks why Enron still matters. They also reveal the fates of the key players in the scandal.
          The Enron scandal brought down one of the most admired companies of the 1990s. Countless books and articles were written about it, but only The Smartest Guys in the Room holds up a decade later as the definitive narrative. For this tenth anniversary edition, McLean and Elkind have revisited the fall of Enron and its aftermath, in a new chapter that asks why Enron still matters. They also reveal the fates of the key players in the scandal.
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

const coverStyle = {
  float: 'left',
  backgroundColor: 'yellow',
  width: '160px',
  height: '160px',
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

export default InfoWindow;
