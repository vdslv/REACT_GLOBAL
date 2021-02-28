import React from 'react';
import classes from './MainPage.module.scss';
import { movies } from '../../mocks';
import { Movie } from '../../shared';
import { MainBody, Banner } from './components';

interface MainPageState {
  moviesArr: Movie[];
  selectedGenre: string;
}

export class MainPage extends React.Component<{}, MainPageState> {
  constructor(props: {}) {
    super(props);
    this.state = { moviesArr: movies.sort((a, b) => b.year - a.year), selectedGenre: 'ALL' };
  }

  changeGenre = (value: string) => {
    const filteredMovies =
      value === 'ALL' ? movies : movies.filter((movie) => movie.genre.toLowerCase() === value.toLowerCase());
    this.setState(() => {
      return {
        selectedGenre: value,
        moviesArr: filteredMovies,
      };
    });
  };

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

  sortBy = (value: boolean) => {
    if (value) {
      this.setState((prevState) => {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => b.year - a.year),
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => a.year - b.year),
        };
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
          <MainBody
            selectedGenre={this.state.selectedGenre}
            filterGenre={this.changeGenre}
            sortBy={this.sortBy}
            movies={this.state.moviesArr}
          />
        </div>
      </>
    );
  }
}
