import React from 'react';
import PropTypes from 'prop-types';
import "./footer_menu.css"
/**
 * Primary UI component for user interaction
 */
export const Footer_menu = ({children}) => {

  return (
    <div className='footer_menu'>
        {children}
    </div>
  );

};

Footer_menu.propTypes = {
}