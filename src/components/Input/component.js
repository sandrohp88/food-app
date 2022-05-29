import styles from "./styles.module.css";
import { forwardRef } from "react";
export const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});
