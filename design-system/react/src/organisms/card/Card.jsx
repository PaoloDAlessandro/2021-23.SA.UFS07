import React from 'react';
import PropTypes from 'prop-types';
import "./card.css"
/**
 * Primary UI component for user interaction
 */
export const Card = ({children, id}) => {

  return (
    <div className='card' id={id}>
        {children}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
}