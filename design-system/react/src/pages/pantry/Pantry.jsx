import React from 'react';
import PropTypes from 'prop-types';
import './pantry.css';
/**
 * Primary UI component for user interaction
 */
export const Pantry = ({children}) => {

  return (
    <div className='pantry'>
        {children}
    </div>
  );

};

Pantry.propTypes = {
}