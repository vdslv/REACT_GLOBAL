import React from 'react';
import classes from './MainPage.module.scss';
import { movies } from '../../mocks/movies';
import { Movie } from '../../shared';
import { MainBody, Banner } from './components';

interface MainPageState {
  moviesArr: Movie[];
}

export class MainPage extends React.Component<{}, MainPageState> {
  constructor(props: {}) {
    super(props);
    this.state = { moviesArr: movies };
  }

  searchMovie = (value: string): void => {
    if (value) {
      const newMovies = movies.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()));
      this.setState(() => {
        return { moviesArr: newMovies };
      });
    } else {
      this.setState(() => {
        return { moviesArr: movies };
      });
    }
  };

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
