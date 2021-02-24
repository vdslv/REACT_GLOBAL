import React from 'react';
import classes from './SearchPanel.module.scss';
import { Input } from '../../../shared/components/Input/Input';
import { Button } from '../../../shared/components/Button/Button';

interface SearchPanelProps {
  onSearch: (value: any) => any;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ onSearch }) => {
  return (
    <div className={classes.panel}>
      <span className={classes.panel__title}>FIND YOUR MOVIE</span>
      <form className={classes.panel__wrapper} onSubmit={(e) => onSearch(e)}>
        <div className={classes.panel__wrapper__input}>
          <Input type={'text'} placeholder={'What do you want to watch?'} bg={'transparent'} />
        </div>
        <Button size={'large'} fill={'red'} type={'submit'}>
          SEARCH
        </Button>
      </form>
    </div>
  );
};
