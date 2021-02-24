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
      ${classes[fill === 'transparent' ? 'btn__transparent' : 'btn__red']}
      ${classes[size === 'small' ? 'btn__small' : 'btn__large']}
        `}
      type={type}
    >
      {children}
    </button>
  );
};
