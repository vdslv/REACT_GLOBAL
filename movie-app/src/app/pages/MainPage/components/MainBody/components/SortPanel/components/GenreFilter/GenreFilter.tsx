import React from 'react';
import classes from './GenreFilter.module.scss';

export const GenreFilter: React.FC<{
  genres: string[];
  genreFilter: (genre: string) => void;
  selectedGenre: string;
}> = ({ genres, genreFilter, selectedGenre }) => {
  const renderedGenres = genres.map((genre) => (
    <li
      className={`${classes.item} ${selectedGenre === genre && classes['item--selected']}`}
      key={genre}
      onClick={() => genreFilter(genre)}
    >
      {genre}{' '}
    </li>
  ));
  return <ul className={classes.genres}>{renderedGenres}</ul>;
};
