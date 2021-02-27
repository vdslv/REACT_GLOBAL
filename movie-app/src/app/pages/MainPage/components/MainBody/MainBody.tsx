import React from 'react';
import classes from './MainBody.module.scss';
import { MovieList, SortPanel } from './components';
import { Movie } from '../../../../shared';

interface MainBodyProps {
  movies: Movie[];
}

export const MainBody: React.FC<MainBodyProps> = ({ movies }) => {
  return (
    <div className={classes.main}>
      <SortPanel />
      <p className={classes.main__quantity}>
        <b>{movies.length}</b> movies found
      </p>
      <MovieList movies={movies} />
    </div>
  );
};
