import React from 'react';
import { ErrorBoundary } from '../../../core/ErrorBoundary/ErrorBoundary';
import classes from './MainPage.module.scss';
import { Banner } from '../../stateless/Banner/Banner';
import { movies } from '../../../mocks/movies';
import { Movie } from '../../../shared/models/Movie.model';
import { MainBody } from '../../stateless/MainBody/MainBody';

interface MainPageState {
  moviesArr: Movie[];
}

export class MainPage extends React.Component<any, MainPageState> {
  constructor(props: any) {
    super(props);
    this.state = { moviesArr: movies };
  }

  searchMovie(e: any): void {
    e.preventDefault();
    const value = e.target[0].value;
    if (value) {
      const newMovies = this.state.moviesArr.filter((movie) => movie.title.includes(value));
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
      <ErrorBoundary>
        <div className={classes.banner}>
          <Banner onSearch={(e) => this.searchMovie(e)} />
        </div>
        <div className={classes.content}>
          <MainBody movies={this.state.moviesArr} />
        </div>
      </ErrorBoundary>
    );
  }
}
