import React from 'react';
import PropTypes from 'prop-types';
import "./card_data.css"
/**
 * Primary UI component for user interaction
 */
export const Card_data = ({children}) => {

  return (
    <div className='card_data'>
        {children}
    </div>
  );
};

Card_data.propTypes = {
}