import React from 'react';
import PropTypes from 'prop-types';
import "./header.css"
/**
 * Primary UI component for user interaction
 */
export const Header = ({children}) => {

  return (
    <header className='header'>
        {children}
    </header>
  );

};

Header.propTypes = {
}