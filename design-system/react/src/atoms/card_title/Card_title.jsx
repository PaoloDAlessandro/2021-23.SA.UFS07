import React from 'react';
import PropTypes from 'prop-types';
import './card_title.css';

/**
 * Primary UI component for user interaction
 */
export const Card_title = ({ text, id }) => {
  return (
    <h3 id={id}>
      {text}
    </h3>
  );
};

Card_title.propTypes = {
  id: PropTypes.string,
}



