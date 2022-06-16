import React from 'react';
import PropTypes from 'prop-types';
import "./tag.css"
/**
 * Primary UI component for user interaction
 */
export const Tag = ({children, back_color, id}) => {

  return (
    <div className='tag' id={id} style={{backgroundColor:back_color}}>
        {children}
    </div>
  );
};

Tag.propTypes = {
    id: PropTypes.string,
}