import React from 'react';
import PropTypes from 'prop-types';
import "./image.css";

/**
 * Primary UI component for user interaction
 */
export const Image = ({ src, status, id }) => {
    
  let active = "default";

  if (status) {
    active = "active";
  }
  

  return (
    <img
      src={src} className={active} id={id}
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

  id: PropTypes.string,
  /**
   * Optional click handler
   */
};

Image.defaultProps = {
  status: false,
}

