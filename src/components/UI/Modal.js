import { Fragment } from "react";
import  ReactDOM  from "react-dom";

import Card from './Card/Card';

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Card>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.backdrop} onClick={props.hide}></div>
          <div className={styles.modal}>
            {props.children}
          </div>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Card>
  );
};

export default Modal;
