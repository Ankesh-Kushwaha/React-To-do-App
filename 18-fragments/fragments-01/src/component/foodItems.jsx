/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Item from "./item.jsx";

function FoodItems1({ items }) {
  
  let [activeItems,setActiveItems]=useState([]);


  const handleBuy=(item,event)=>{
        let newItems=[...activeItems,item]
        setActiveItems(newItems);
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item foodItem={item} bought={activeItems.includes(item)} handleBuy={(event)=>{handleBuy(item,event)}}></Item>
      ))}
    </ul>
  );
}
export default FoodItems1;
