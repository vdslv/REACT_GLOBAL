import classes from './MainBody.module.scss';
import { SortPanel } from '../../stateless/SortPanel/SortPanel';
import { MovieList } from '../../stateless/MoviesList/MovieList';

const movies = [
  {
    title: 'Replicas',
    genre: 'Action & Adventure',
    year: 2004,
    src: 'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
    id: 1,
  },
  {
    title: 'Replicas',
    genre: 'Action & Adventure',
    year: 2004,
    src: 'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
    id: 2,
  },
  {
    title: 'Replicas',
    genre: 'Action & Adventure',
    year: 2004,
    src: 'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
    id: 3,
  },
  {
    title: 'Replicas',
    genre: 'Action & Adventure',
    year: 2004,
    src: 'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
    id: 4,
  },
  {
    title: 'Replicas',
    genre: 'Action & Adventure',
    year: 2004,
    src: 'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
    id: 5,
  },
  {
    title: 'Replicas',
    genre: 'Action & Adventure',
    year: 2004,
    src: 'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
    id: 6,
  },
  {
    title: 'Replicas',
    genre: 'Action & Adventure',
    year: 2004,
    src: 'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
    id: 7,
  },
  {
    title: 'Replicas',
    genre: 'Action & Adventure',
    year: 2004,
    src: 'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
    id: 8,
  },
];

export default function MainBody() {
  return (
    <div className={classes.main}>
      <SortPanel />
      <p className={classes.main__quantity}>
        <b>{movies.length}</b> movies found
      </p>
      <MovieList movies={movies} />
    </div>
  );
}
