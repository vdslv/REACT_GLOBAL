import React from 'react';
import classes from './Banner.module.scss';
import { Button } from '../../../shared/components/Button/Button';
import { SearchPanel } from '../../stateless/SearchPanel/SearchPanel';

export const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__wrapper}>
        <div className={classes.banner__content}>
          <div className={classes.banner__content__title}>
            <span>
              <b>netflix</b>roulette
            </span>
            <Button size={'small'} fill={'transparent'}>
              + ADD MOVIE
            </Button>
          </div>
          <div className={classes.banner__content__panel}>
            <SearchPanel />
          </div>
        </div>
      </div>
    </div>
  );
};
