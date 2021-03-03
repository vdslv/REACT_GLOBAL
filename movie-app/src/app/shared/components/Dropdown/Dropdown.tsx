import { Multiselect } from 'multiselect-react-dropdown';
import React from 'react';
import classes from './Dropdown.module.scss';
import { Option } from '../../models';

interface DropdownCheckboxProps {
  options: Option[];
  onChange?: (value: string) => void;
  label?: string;
  selectedValues?: string[];
}

const style = {
  inputField: {
    fontSize: '20px',
    backgroundColor: 'transparent',
    padding: '17px',
  },
  optionContainer: {
    border: 'none',
    boxShadow: '5px 5px 15px 5px #000000',
  },
  option: {
    backgroundColor: '#232323',
    color: 'white',
  },
  chips: { background: 'transparent', border: 'none', fontSize: '18px', color: 'white' },
  multiselectContainer: {
    boxSizing: 'border-box',
    color: 'blue',
    background: '#232323',
  },
  searchBox: {
    margin: '15px 0',
    fontSize: '20px',
    border: 'none',
    color: 'white',
    padding: '0',
    height: '100%',
    borderRadius: '5px',
    backgroundColor: 'rgba(45, 45, 45, 0.8)',
  },
};

export default class Dropdown extends React.Component<DropdownCheckboxProps, any> {
  constructor(props: DropdownCheckboxProps) {
    super(props);
    this.state = { selectedValue: '' };
  }

  onChange = (list: any, item: any) => {
    console.log(list, item);
  };

  render() {
    return (
      <div className={classes.dropdown}>
        <label className={classes.label}>{this.props.label}</label>
        <Multiselect
          selectedValues={this.props?.selectedValues}
          id={'custom_css'}
          hidePlaceholder={true}
          closeOnSelect={false}
          placeholder={'Select genre'}
          options={this.props.options}
          displayValue={'name'}
          onSelect={this.onChange}
          showCheckbox={true}
          showArrow={true}
          style={style}
        />
      </div>
    );
  }
}
