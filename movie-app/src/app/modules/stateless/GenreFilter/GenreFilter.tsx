import React from 'react';
import classes from './GenreFilter.module.scss';

export const GenreFilter: React.FC<{ genres: string[] }> = ({ genres }) => {
  const renderedGenres = genres.map((genre, index: number) => <li className={classes.item} key={index}>{genre} </li>);
  return <ul className={classes.genres}>{renderedGenres}</ul>;
};
