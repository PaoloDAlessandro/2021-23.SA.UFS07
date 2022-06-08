import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Image = ({ src }) => {
    
  return (
    <img
      src={src}
    >
    </img>
  );
};

Image.propTypes = {
  /**
   * Button contents
   */
  src: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
};

