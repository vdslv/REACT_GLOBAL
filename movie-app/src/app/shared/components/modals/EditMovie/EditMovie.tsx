import React from 'react';
import { MovieForm } from '../../MovieForm/MovieForm';

export const EditMovie: React.FC<{ movieId?: number }> = ({ movieId = null }) => {
  return (
    <>
      <MovieForm type={'save'} movieId={123523} />
    </>
  );
};
