import React from 'react';
import classes from './DeleteMovie.module.scss';
import { Button } from '../../Button/Button';

export const DeleteMovie = () => {
  return (
    <>
      <p className={classes['movie__question']}>Are you sure you want to delete this movie?</p>
      <div className={classes['movie__confirm-btn']}>
        <Button size={'small'} fill={'red'}>
          CONFIRM
        </Button>
      </div>
    </>
  );
};
