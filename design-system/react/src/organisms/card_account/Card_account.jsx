import React from 'react';
import PropTypes from 'prop-types';
import "./card_account.css"
/**
 * Primary UI component for user interaction
 */
export const Card_account = ({children}) => {

  return (
    <div className='card_account'>
        {children}
    </div>
  );
};

Card_account.propTypes = {
}