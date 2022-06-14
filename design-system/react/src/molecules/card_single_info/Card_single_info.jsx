import React from 'react';
import PropTypes from 'prop-types';
import "./card_single_info.css"
/**
 * Primary UI component for user interaction
 */
export const Card_single_info = ({id, children}) => {

  return (
    <div className='card_single_info' id={id}>
        {children}
    </div>
  );

};

Card_single_info.propTypes = {
    id: PropTypes.string.isRequired,
}