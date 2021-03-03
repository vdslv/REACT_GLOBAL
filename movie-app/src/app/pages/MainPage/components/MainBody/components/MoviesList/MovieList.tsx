import React from 'react';
import classes from './MovieList.module.scss';
import { MovieCard } from './components';
import { Movie } from '../../../../../../shared';

type MovieListProps = {
  movies: Movie[];
  showEditModal: () => void;
  showDeleteModal: () => void;
};

export const MovieList: React.FC<MovieListProps> = ({ movies, showEditModal, showDeleteModal }) => {
  return (
    <ul className={classes.list}>
      {movies.map((movie) => (
        <MovieCard showDeleteModal={showDeleteModal} showEditModal={showEditModal} key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
