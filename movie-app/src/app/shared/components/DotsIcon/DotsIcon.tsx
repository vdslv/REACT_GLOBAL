import React from 'react';
import classes from './DotsIcon.module.scss';

interface DotsIconProps {
  movieId: number;
  showEditModal: () => void;
  showDeleteModal: () => void;
}

export default class DotsIcon extends React.Component<DotsIconProps, { opened: boolean }> {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

  showModal = () => {
    this.setState((prevState) => {
      return {
        opened: !prevState.opened,
      };
    });
  };

  render() {
    return (
      <div className={classes.wrapper}>
        {this.state.opened && (
          <div className={classes.wrapper__modal}>
            <div className={classes.wrapper__close}>
              <span onClick={this.showModal}>&#10006;</span>
            </div>
            <p onClick={this.props.showEditModal}>
              <span>Edit</span>
            </p>
            <p onClick={this.props.showDeleteModal}>
              <span>Delete</span>
            </p>
          </div>
        )}
        <div className={classes.icon} onClick={this.showModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>
    );
  }
}
