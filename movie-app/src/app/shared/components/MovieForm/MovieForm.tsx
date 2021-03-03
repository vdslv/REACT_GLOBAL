import React from 'react';
import { Input } from '../Input/Input';
import classes from './MovieForm.module.scss';
import { Button } from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import { dropdownGenres } from '../../../mocks';
import { Movie } from '../../models';

interface MovieFormProps {
  movie?: Movie;
  movieId?: number;
  type: 'submit' | 'save';
}

export class MovieForm extends React.Component<MovieFormProps, {}> {
  render() {
    return (
      <>
        {this.props.movieId && (
          <div className={classes['movie-id']}>
            <p className={classes['movie-id--title']}>MOVIE ID</p>
            <p className={classes['movie-id--number']}>{this.props.movieId}</p>
          </div>
        )}
        <Input
          value={this.props.movie?.title}
          label={'TITLE'}
          type={'text'}
          bg={'transparent'}
          placeholder={'Title here'}
        />
        <Input label={'RELEASE DATE'} type={'date'} bg={'transparent'} placeholder={'Select date'} />
        <Input
          value={this.props.movie?.src}
          label={'MOVIE URL'}
          type={'text'}
          bg={'transparent'}
          placeholder={'Movie URL here'}
        />
        <Dropdown
          label={'GENRE'}
          options={dropdownGenres.map((genre, ind) => {
            return {
              name: genre,
              id: ind,
            };
          })}
        />
        <Input
          value={this.props.movie?.overview}
          label={'OVERVIEW'}
          type={'text'}
          bg={'transparent'}
          placeholder={'Overview here'}
        />
        <Input
          value={this.props.movie?.runtime}
          label={'RUNTIME'}
          type={'text'}
          bg={'transparent'}
          placeholder={'Runtime here'}
        />
        <div className={classes['form__buttons']}>
          <Button size={'small'} fill={'transparent'}>
            RESET
          </Button>
          <Button type={'submit'} size={'small'} fill={'red'}>
            {this.props.type === 'submit' ? 'SUBMIT' : 'SAVE'}
          </Button>
        </div>
      </>
    );
  }
}
