import React from 'react';
import PropTypes from 'prop-types';
import './tag_title.css';

/**
 * Primary UI component for user interaction
 */
export const Tag_title = ({ text }) => {
  return (
    <h6 className='tag_title'>
      {text}
    </h6>
  );
};



