import React from 'react';
import classes from './MovieCard.module.scss';
import { Movie } from '../../../../../../../../shared';
import DotsIcon from '../../../../../../../../shared/components/DotsIcon/DotsIcon';

interface MovieCardProps {
  movie: Movie;
  showEditModal: () => void;
  showDeleteModal: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, showEditModal, showDeleteModal }) => {
  const { title, genre, year, src, id } = movie;
  return (
    <li className={classes.card}>
      <div className={classes.card__wrapper}>
        <div className={classes['card__wrapper--dots']}>
          <DotsIcon showDeleteModal={showDeleteModal} showEditModal={showEditModal} movieId={id} />
        </div>
        <img className={classes['card__wrapper--image']} src={src} alt={title} />
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
