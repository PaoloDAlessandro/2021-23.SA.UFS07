import React from 'react';
import PropTypes from 'prop-types';
import "./card_infos.css"
/**
 * Primary UI component for user interaction
 */
export const Card_infos = ({children}) => {

  return (
    <div className='card_infos'>
        {children}
    </div>
  );
};

Card_infos.propTypes = {
}