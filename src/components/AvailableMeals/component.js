import styles from "./styles.module.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import MealItem from "../MealItem";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFuLiVrsdpMpHGE_Pw0-DV_3_-lxhxaHc",
  authDomain: "food-app-backend-9faca.firebaseapp.com",
  databaseURL: "https://food-app-backend-9faca-default-rtdb.firebaseio.com",
  projectId: "food-app-backend-9faca",
  storageBucket: "food-app-backend-9faca.appspot.com",
  messagingSenderId: "273016596689",
  appId: "1:273016596689:web:d5a397417f7a5be96b7df0",
};

// Initialize Firebase
export const AvailableMeals = () => {
  const app = initializeApp(firebaseConfig);
  
  // const database = getDatabase();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const getMeals = async () => {
      const dbRef = ref(getDatabase());
      try {
        const response = await get(dbRef, "/meals");
        if (response.exists()) {
          const fetchedMeals = response.val().meals;
          const updatedMeals = [];
          for (let key in fetchedMeals) {
            if (fetchedMeals.hasOwnProperty(key)) {
              updatedMeals.push({ id: key, ...fetchedMeals[key] });
            }
          }
          setMeals(updatedMeals);
        } else {
          console.log("No data available");
        }
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
