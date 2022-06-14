import React from 'react';
import PropTypes from 'prop-types';
import './card_marca.css';

/**
 * Primary UI component for user interaction
 */
export const Card_marca = ({ text, class_style }) => {
  return (
    <h5 className={class_style}>
      {text}
    </h5>
  );
};

Card_marca.propTypes = {
  class_style: PropTypes.string.isRequired,
}



