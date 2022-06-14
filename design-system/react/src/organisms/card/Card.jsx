import React from 'react';
import PropTypes from 'prop-types';
import "./card.css"
/**
 * Primary UI component for user interaction
 */
export const Card = ({children}) => {

  return (
    <div className='card'>
        {children}
    </div>
  );
};

Card.propTypes = {

}