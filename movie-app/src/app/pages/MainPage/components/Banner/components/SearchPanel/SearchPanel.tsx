import React, { ChangeEvent } from 'react';
import classes from './SearchPanel.module.scss';
import { Button, Input } from '../../../../../../shared';

interface SearchPanelProps {
  onSearch: (value: string) => void;
}

export default class SearchPanel extends React.Component<SearchPanelProps, { inputValue: string }> {
  constructor(props: SearchPanelProps) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  onSearch = () => {
    this.props.onSearch(this.state.inputValue);
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
          <div className={classes['panel__wrapper--btn']} onClick={this.onSearch}>
            <Button size={'large'} fill={'red'} type={'button'}>
              SEARCH
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
