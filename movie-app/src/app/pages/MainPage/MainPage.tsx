import React from 'react';
import classes from './MainPage.module.scss';
import { movies } from '../../mocks';
import { AddMovie, DeleteMovie, EditMovie, Movie } from '../../shared';
import { MainBody, Banner } from './components';
import Modal from '../../shared/components/modals/Modal/Modal';
import { Modes } from '../../shared/enums';

interface MainPageState {
  moviesArr: Movie[];
  selectedGenre: string;
  mode: Modes;
  modalTitle: string;
}

export class MainPage extends React.Component<{}, MainPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      modalTitle: '',
      mode: Modes.OVERVIEW,
      moviesArr: movies.sort((a, b) => b.year - a.year),
      selectedGenre: 'ALL',
    };
  }

  closeModal = () => {
    this.setState({
      mode: Modes.OVERVIEW,
    });
  };

  addMovieModal = () => {
    this.setState({
      mode: Modes.ADD,
      modalTitle: 'ADD MOVIE',
    });
  };

  deleteMovieModal = () => {
    this.setState({
      mode: Modes.DELETE,
      modalTitle: 'DELETE MOVIE',
    });
  };

  editMovieModal = () => {
    this.setState({
      mode: Modes.EDIT,
      modalTitle: 'EDIT MOVIE',
    });
  };

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
          <Banner addMovie={this.addMovieModal} onSearch={this.searchMovie} />
        </div>
        <div className={classes.content}>
          <MainBody
            selectedGenre={this.state.selectedGenre}
            filterGenre={this.changeGenre}
            sortBy={this.sortBy}
            movies={this.state.moviesArr}
            showEditModal={this.editMovieModal}
            showDeleteModal={this.deleteMovieModal}
          />
        </div>
        {this.state.mode !== Modes.OVERVIEW && (
          <Modal closeModal={this.closeModal} title={this.state.modalTitle}>
            {this.state.mode === Modes.DELETE && <DeleteMovie />}
            {this.state.mode === Modes.EDIT && <EditMovie />}
            {this.state.mode === Modes.ADD && <AddMovie />}
          </Modal>
        )}
      </>
    );
  }
}
