import styles from "./styles.module.css";
import food_img from "../../assets/meals.jpg";
export const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Food App</h1>
      </header>
      <div className={styles["main-image"]}>
        <img src={food_img} alt="Table of food" />
      </div>
    </>
  );
};
