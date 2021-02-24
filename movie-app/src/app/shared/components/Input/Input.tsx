import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  type: string;
  placeholder: string;
  bg: 'transparent' | 'filled';
}

export const Input: React.FC<InputProps> = ({ type, placeholder, bg }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`
      ${classes.input}
      ${classes[bg === 'transparent' ? 'input__transparent' : 'input__filled']}
      `}
    />
  );
};
