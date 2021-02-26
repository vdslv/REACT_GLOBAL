import React from 'react';
import classes from './MainPage.module.scss';
import { Banner } from '../../stateless/Banner/Banner';
import { movies } from '../../../mocks/movies';
import { Movie } from '../../../shared/models/Movie.model';
import { MainBody } from '../../stateless/MainBody/MainBody';

interface MainPageState {
  moviesArr: Movie[];
}

export class MainPage extends React.Component<{}, MainPageState> {
  constructor(props: {}) {
    super(props);
    this.state = { moviesArr: movies };
  }

  searchMovie = (e: any): void => {
    e.preventDefault();
    const value = e.target[0].value;
    if (value) {
      const newMovies = movies.filter((movie) => movie.title.includes(value));
      this.setState(() => {
        return { moviesArr: newMovies };
      });
    } else {
      this.setState(() => {
        return { moviesArr: movies };
      });
    }
  }

  render() {
    return (
        <>
          <div className={classes.banner}>
            <Banner onSearch={this.searchMovie} />
          </div>
          <div className={classes.content}>
            <MainBody movies={this.state.moviesArr} />
          </div>
        </>
    );
  }
}
