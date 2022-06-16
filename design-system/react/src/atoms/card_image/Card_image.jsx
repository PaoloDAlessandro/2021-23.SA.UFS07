import React from 'react';
import PropTypes from 'prop-types';
import "./card_image.css";

/**
 * Primary UI component for user interaction
 */
export const Card_image = ({ src, id, styleClass }) => {

  return (
    <img
      src={src} id={id} className={styleClass}
    >
    </img>
  );
};

Card_image.propTypes = {
  /**
   * Button contents
   */
  src: PropTypes.string.isRequired,

  id: PropTypes.string,

  styleClass: PropTypes.string,
  /**
   * Optional click handler
   */
};

Card_image.defaultProps = {

}

