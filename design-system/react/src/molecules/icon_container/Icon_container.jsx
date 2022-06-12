import React from 'react';
import PropTypes from 'prop-types';
import "./icon_container.css"
/**
 * Primary UI component for user interaction
 */
export const Icon_container = ({children}) => {

  return (
    <div className='icon_container'>
        {children}
    </div>
  );

};

Icon_container.propTypes = {
}