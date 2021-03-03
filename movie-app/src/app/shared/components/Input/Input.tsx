import React, { ChangeEvent } from 'react';
import classes from './Input.module.scss';

interface InputProps {
  type: string;
  placeholder?: string;
  bg: 'transparent' | 'filled' | 'readonly';
  handleInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  type,
  label = '',
  placeholder,
  bg,
  handleInputChange,
  readonly = false,
}) => {
  return (
    <div className={classes[label && 'input__wrapper']}>
      {label && <label className={classes.input__label}>{label}</label>}
      <input
        readOnly={readonly}
        onChange={handleInputChange && handleInputChange}
        placeholder={placeholder}
        type={type}
        className={`
      ${classes.input}
      ${classes[bg === 'transparent' ? 'input__transparent' : bg === 'readonly' ? 'input__readonly' : 'input__filled']}
      ${classes[label && 'input--labeled']}
      `}
      />
    </div>
  );
};
