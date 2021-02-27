import React from 'react';
import classes from './MovieList.module.scss';
import { MovieCard } from './components';
import { Movie } from '../../../../../../shared';

type MovieListProps = {
  movies: Movie[];
};

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul className={classes.list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
