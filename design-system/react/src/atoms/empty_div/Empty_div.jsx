import React from 'react';
import PropTypes from 'prop-types';
import "./empty_div.css"
/**
 * Primary UI component for user interaction
 */
export const Empty_div = ({width_size}) => {

  return (
    <div className='empty_div' style={{width:width_size}}>

    </div>
  );

};

Empty_div.propTypes = {
    width_size: PropTypes.string.isRequired,
}

