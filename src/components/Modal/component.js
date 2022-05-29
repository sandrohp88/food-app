// import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
export const Modal = (props) => {
  const portalID = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalID)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalID
      )}
    </>
  );
};
