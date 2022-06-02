import styles from "./styles.module.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import MealItem from "../MealItem";
export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await fetch(
          "https://food-app-backend-9faca-default-rtdb.firebaseio.com/meals.json"
        );
        const fetchedMeals = await response.json();
        const updatedMeals = [];
        for (let key in fetchedMeals) {
          if (fetchedMeals.hasOwnProperty(key)) {
            updatedMeals.push({ id: key, ...fetchedMeals[key] });
          }
        }
        setMeals(updatedMeals);
      } catch (error) {
        console.log(error);
      }
    };
    getMeals();
  }, []);
  const mealList = meals.map((meal) => <MealItem meal={meal} key={meal.id} />);
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
