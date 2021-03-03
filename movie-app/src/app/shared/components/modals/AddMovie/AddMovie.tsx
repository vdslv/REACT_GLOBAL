import React from 'react';
import { MovieForm } from '../../MovieForm/MovieForm';

export const AddMovie: React.FC<{ movieId?: number }> = ({ movieId = null }) => {
  return (
    <>
      <MovieForm type={'submit'} />
    </>
  );
};
