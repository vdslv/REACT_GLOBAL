import React from 'react';
import { GenreFilter } from './components';
import { genres } from '../../../../../../mocks/genres';
import classes from './SortPanel.module.scss';
import { Dropdown } from '../../../../../../shared';

export const SortPanel = () => {
  return (
    <div className={classes['sort-panel']}>
      <GenreFilter genres={genres} />
      <div>
        <span className={classes['sort-panel__sort-by']}>SORT BY</span>
        <Dropdown />
      </div>
    </div>
  );
};
