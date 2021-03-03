import React from 'react';
import { Input } from '../Input/Input';
import classes from './MovieForm.module.scss';
import { Button } from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import { dropdownGenres } from '../../../mocks';

interface MovieFormProps {
  movieId?: number;
  type: 'submit' | 'save';
}

export const MovieForm: React.FC<MovieFormProps> = ({ movieId, type }) => {
  return (
    <>
      {movieId && (
        <div className={classes['movie-id']}>
          <p className={classes['movie-id--title']}>MOVIE ID</p>
          <p className={classes['movie-id--number']}>{movieId}</p>
        </div>
      )}
      <Input label={'TITLE'} type={'text'} bg={'transparent'} placeholder={'Title here'} />
      <Input label={'RELEASE DATE'} type={'date'} bg={'transparent'} placeholder={'Select date'} />
      <Input label={'MOVIE URL'} type={'text'} bg={'transparent'} placeholder={'Movie URL here'} />
      <Dropdown
        label={'GENRE'}
        options={dropdownGenres.map((genre, ind) => {
          return {
            name: genre,
            id: ind,
          };
        })}
      />
      <Input label={'OVERVIEW'} type={'text'} bg={'transparent'} placeholder={'Overview here'} />
      <Input label={'RUNTIME'} type={'text'} bg={'transparent'} placeholder={'Runtime here'} />
      <div className={classes['form__buttons']}>
        <Button size={'small'} fill={'transparent'}>
          RESET
        </Button>
        <Button type={'submit'} size={'small'} fill={'red'}>
          {type === 'submit' ? 'SUBMIT' : 'SAVE'}
        </Button>
      </div>
    </>
  );
};
