import React, { ChangeEvent } from 'react';
import classes from './Dropdown.module.scss';
import { Option } from '../../models';

interface DropdownProps {
  options: Option[];
  onChange: (value: string) => void;
}

export default class Dropdown extends React.Component<DropdownProps, any> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = { selectedValue: '' };
  }

  onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <select className={classes.dropdown} onChange={this.onChange}>
        {this.props.options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }
}
