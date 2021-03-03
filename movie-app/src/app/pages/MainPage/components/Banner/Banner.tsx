import React from 'react';
import classes from './Banner.module.scss';
import { Button } from '../../../../shared';
import SearchPanel from './components/SearchPanel/SearchPanel';

interface BannerProps {
  onSearch: (value: string) => void;
  addMovie: () => void;
}

export const Banner: React.FC<BannerProps> = ({ onSearch, addMovie }) => {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__wrapper}>
        <div className={classes.banner__content}>
          <div className={classes['banner__content--title']}>
            <span>
              <b>netflix</b>roulette
            </span>
            <div onClick={addMovie}>
              <Button size={'small'} fill={'transparent'}>
                + ADD MOVIE
              </Button>
            </div>
          </div>
          <div className={classes['banner__content--panel']}>
            <SearchPanel onSearch={onSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};
