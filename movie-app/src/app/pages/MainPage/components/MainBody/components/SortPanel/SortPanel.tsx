import React from 'react';
import { GenreFilter } from './components';
import classes from './SortPanel.module.scss';
import { genres } from '../../../../../../mocks';
import { Arrow } from '../../../../../../shared/components/Arrow/Arrow';

interface SortPanelProps {
  sortBy: (value: boolean) => void;
  filterGenre: (value: string) => void;
  selectedGenre: string;
}

interface SortPanelState {
  opened: boolean;
}

export class SortPanel extends React.Component<SortPanelProps, SortPanelState> {
  constructor(props: SortPanelProps) {
    super(props);
    this.state = { opened: false };
  }

  sortByDate = () => {
    this.setState((prevState) => {
      this.props.sortBy(prevState.opened);
      return {
        opened: !prevState.opened,
      };
    });
  };

  render() {
    return (
      <div className={classes['sort-panel']}>
        <GenreFilter selectedGenre={this.props.selectedGenre} genreFilter={this.props.filterGenre} genres={genres} />
        <div className={classes['sort-panel__wrapper']}>
          <span className={classes['sort-panel__sort--title']}>SORT BY</span>
          <div className={classes['sort-panel__sort']} onClick={this.sortByDate}>
            <span>RELEASE DATE</span>
            <div
              className={`${classes['sort-panel__sort--arrow']} ${
                this.state.opened ? classes['sort-panel__sort--arrow-rotated'] : ''
              }`}
            >
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
