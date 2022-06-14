import React from 'react';
import PropTypes from 'prop-types';
import "./Card_image_container.css"
/**
 * Primary UI component for user interaction
 */
export const Card_image_container = ({back_color, image, children}) => {

  return (
    <div className='card_image_container' style={{backgroundColor:back_color}}>
        {children}
    </div>
  );

};

Card_image_container.propTypes = {
    back_color: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}