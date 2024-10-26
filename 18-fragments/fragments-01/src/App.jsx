import "./App.css";
import FoodItems1 from "./component/foodItems";
import styles from "./component/item.module.css";
import Container from "./container";
import InputItems from "./component/InputItems";
import { useState } from "react";

function App() {
  //let textStateArr=useState("food Items entered by user");//it return array of two element;
  //  let [textToShow,setTextState]=useState();
  // let textToShow=textStateArr[0];
  // let setTextState=textStateArr[1];

  let [foodItems, setFoodItems] = useState([
    "Sabji",
    "Roti",
    "Green Vegetables",
  ]);

  const handleonKeyDown = (event) => {
    if (event.key === "Enter") {
        let newfoodItems=event.target.value;
        event.target.value='';
        let newItems=[...foodItems,newfoodItems];
        setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className={`${styles.heading}`}>Healthy Food</h1>
        <InputItems handleonKeyDown={handleonKeyDown} />
        <FoodItems1 items={foodItems}></FoodItems1>
      </Container>

      <Container>Above is the list of items for Helthy well being.</Container>
    </>
  );
}

export default App;
