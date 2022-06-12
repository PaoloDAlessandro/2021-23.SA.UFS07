import React from 'react';
import PropTypes from 'prop-types';
import "./footer.css"
/**
 * Primary UI component for user interaction
 */
export const Footer = ({children}) => {

  return (
    <footer className='footer'>
        {children}
    </footer>
  );

};

Footer.propTypes = {
}