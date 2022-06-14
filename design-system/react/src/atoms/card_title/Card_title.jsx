import React from 'react';
import PropTypes from 'prop-types';
import './card_title.css';

/**
 * Primary UI component for user interaction
 */
export const Card_title = ({ text }) => {
  return (
    <h3>
      {text}
    </h3>
  );
};



