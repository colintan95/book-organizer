import React from 'react';

import Searchbar from '../Searchbar';
import ResultsList from '../ResultsList';
import CloseButton from '../CloseButton';

const AddWindowView = ({}) => (
  <div>
    <div style={backgroundStyle}></div>
    <div style={windowStyle}>
      <Searchbar/>
      <ResultsList/>
      <CloseButton/>
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

export default AddWindowView;
