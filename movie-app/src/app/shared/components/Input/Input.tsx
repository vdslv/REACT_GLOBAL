import React, {ChangeEvent} from 'react';
import classes from './Input.module.scss';

interface InputProps {
  type: string;
  placeholder: string;
  bg: 'transparent' | 'filled';
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, bg, handleInputChange }) => {
  return (
    <input
        onChange={handleInputChange}
      placeholder={placeholder}
      type={type}
      className={`
      ${classes.input}
      ${classes[bg === 'transparent' ? 'input__transparent' : 'input__filled']}
      `}
    />
  );
};
