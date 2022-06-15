import React from 'react';
import PropTypes from 'prop-types';
import "./cards_container.css"
/**
 * Primary UI component for user interaction
 */
export const Cards_container = ({children}) => {

  return (
    <div className='cards_container'>
        {children}
    </div>
  );
};

Cards_container.propTypes = {

}