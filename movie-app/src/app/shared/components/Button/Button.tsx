import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  size: 'small' | 'large';
  fill: 'transparent' | 'red';
}

export const Button: React.FC<ButtonProps> = ({ type = 'button', fill, size, children }) => {
  return (
    <button
      className={`
      ${classes.btn}
      ${classes[fill === 'transparent' ? 'btn--transparent' : 'btn--red']}
      ${classes[size === 'small' ? 'btn--small' : 'btn--large']}
        `}
      type={type}
    >
      {children}
    </button>
  );
};
