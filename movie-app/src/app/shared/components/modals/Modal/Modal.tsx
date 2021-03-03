import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

const el = document.getElementById('modal-root') as HTMLElement;

interface ModalProps {
  title: string;
  closeModal: () => void;
}

export default class Modal extends React.Component<ModalProps, {}> {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  render() {
    return ReactDOM.createPortal(
      <div className={classes.modal}>
        <div className={classes.modal__scroll}>
          <div className={classes.modal__wrapper}>
            <p className={classes['modal__wrapper--close']}>
              <span className={classes['modal__wrapper--close-icon']} onClick={this.props.closeModal}>
                &#10006;
              </span>
            </p>
            <div className={classes['modal__wrapper--children']}>
              <p className={classes['modal__wrapper--title']}>{this.props.title}</p>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>,
      el,
    );
  }
}
