import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, inverted, ...rest}) => (
  <button
    className={`${inverted ? 'inverted' : ''} custom-button`}
    {...rest}
  >
    {children}
  </button>
);

export default CustomButton;
