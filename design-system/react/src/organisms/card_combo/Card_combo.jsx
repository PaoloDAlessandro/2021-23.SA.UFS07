import React from 'react';
import PropTypes from 'prop-types';
import "./card_combo.css"
/**
 * Primary UI component for user interaction
 */
export const Card_combo = ({children, id}) => {

  return (
    <div className='card_combo' id={id}>
        {children}
    </div>
  );
};


Card_combo.propTypes = {
  id: PropTypes.string,
}