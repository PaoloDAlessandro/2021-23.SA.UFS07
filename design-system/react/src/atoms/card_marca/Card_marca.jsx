import React from 'react';
import PropTypes from 'prop-types';
import './card_marca.css';

/**
 * Primary UI component for user interaction
 */
export const Card_marca = ({ text }) => {
  return (
    <h5 className='marca'>
      {text}
    </h5>
  );
};



