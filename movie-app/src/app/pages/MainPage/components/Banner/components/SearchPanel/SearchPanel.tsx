import React, { ChangeEvent } from 'react';
import classes from './SearchPanel.module.scss';
import { Input } from '../../../../../../shared/components/Input/Input';
import { Button } from '../../../../../../shared/components/Button/Button';

interface SearchPanelProps {
  onSearch: (value: string) => void;
}

export default class SearchPanel extends React.Component<SearchPanelProps, { inputValue: string }> {
  constructor(props: SearchPanelProps) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className={classes.panel}>
        <span className={classes.panel__title}>FIND YOUR MOVIE</span>
        <form className={classes.panel__wrapper}>
          <div className={classes['panel__wrapper--input']}>
            <Input
              handleInputChange={this.handleInputChange}
              type={'text'}
              placeholder={'What do you want to watch?'}
              bg={'transparent'}
            />
          </div>
          <div onClick={() => this.props.onSearch(this.state.inputValue)}>
            <Button size={'large'} fill={'red'} type={'button'}>
              SEARCH
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
