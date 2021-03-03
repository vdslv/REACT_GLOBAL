import React from 'react';
import { MovieForm } from '../../MovieForm/MovieForm';
import { Movie } from '../../../models';

export const EditMovie: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <>
      <MovieForm movie={movie} type={'save'} movieId={movie.id} />
    </>
  );
};
