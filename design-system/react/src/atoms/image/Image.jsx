import React from 'react';
import PropTypes from 'prop-types';
import "./image.css";

/**
 * Primary UI component for user interaction
 */
export const Image = ({ src, status }) => {
    
  let active = "default";

  if (status) {
    active = "active";
  }
  

  return (
    <img
      src={src} id={active}
    >
    </img>
  );
};

Image.propTypes = {
  /**
   * Button contents
   */
  src: PropTypes.string.isRequired,

  status: PropTypes.bool,
  /**
   * Optional click handler
   */
};

Image.defaultProps = {
  status: false,
}

