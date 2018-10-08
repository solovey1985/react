import React from 'react';
import PropTypes from 'prop-types';

export default function Home(props) {
    return (
      <div>
       <div>
            <h1>Home Page</h1>
       </div>
      </div>
    );
  }
  
  Home.propTypes = {
    notify: PropTypes.func,
  };