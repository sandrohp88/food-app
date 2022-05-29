import { DUMMY_MEALS } from "../../assets/meals_data";
import styles from "./styles.module.css";
import Card from "../Card";
import MealItem from "../MealItem";
export const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem meal={meal} key={meal.id} />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
