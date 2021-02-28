import React from 'react';
import classes from './MainBody.module.scss';
import { MovieList, SortPanel } from './components';
import { Movie } from '../../../../shared';

interface MainBodyProps {
  movies: Movie[];
  sortBy: (value: boolean) => void;
  filterGenre: (value: string) => void;
  selectedGenre: string;
}

export const MainBody: React.FC<MainBodyProps> = ({ movies, sortBy, filterGenre, selectedGenre }) => {
  return (
    <div className={classes.main}>
      <SortPanel selectedGenre={selectedGenre} filterGenre={filterGenre} sortBy={sortBy} />
      <p className={classes.main__quantity}>
        <b>{movies.length}</b> movies found
      </p>
      <MovieList movies={movies} />
    </div>
  );
};
