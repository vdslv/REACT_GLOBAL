import React from 'react';
import classes from './MainBody.module.scss';
import { SortPanel } from '../SortPanel/SortPanel';
import { MovieList } from '../MoviesList/MovieList';
import { Movie } from '../../../shared/models/Movie.model';

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
