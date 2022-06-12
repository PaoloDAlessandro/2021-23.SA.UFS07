import React from 'react';
import PropTypes from 'prop-types';
import "./header_child.css"
/**
 * Primary UI component for user interaction
 */
export const Header_child = ({children}) => {

  return (
    <div className='header_child'>
        {children}
    </div>
  );

};

Header_child.propTypes = {
}