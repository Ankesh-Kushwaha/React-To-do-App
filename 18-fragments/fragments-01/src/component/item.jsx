/* eslint-disable react/prop-types */
 import styles from "./item.module.css"
 
function Item({foodItem,bought,handleBuy}){

    return (
      <li key={foodItem} className={`${styles["item-background"]} list-group-item ${bought && 'active'}`}>
        {foodItem}
        <button className={(`${styles.Buy} btn btn-link`)}
        onClick={(event)=>handleBuy(event)}
        >Buy</button>
      </li>
    );
}

export default Item;