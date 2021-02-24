import React from 'react';
import classes from './MovieCard.module.scss';
import { Movie } from '../../../shared/models/Movie.model';
import { DotsIcon } from '../../../shared/components/DotsIcon/DotsIcon';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, genre, year, src } = movie;
  return (
    <li className={classes.card}>
      <div className={classes.card__wrapper}>
        <div className={classes.card__wrapper__dots}>
          <DotsIcon />
        </div>
        <img className={classes.card__wrapper__image} src={src} alt={title} />
      </div>
      <div className={classes.card__content}>
        <div>
          <p className={classes.card__title}>{title}</p>
          <span className={classes.card__genre}>{genre}</span>
        </div>
        <span className={classes.card__year}>{year}</span>
      </div>
    </li>
  );
};
