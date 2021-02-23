import React from 'react';
import classes from './Dropdown.module.scss';

export const Dropdown = () => {
  return (
    <select className={classes.dropdown}>
      <option value='RELEASE DATE'>RELEASE DATE</option>
    </select>
  )
}
