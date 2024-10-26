import AppName from "./component/AppName";
import Addtodo from "./component/Add-todo";
import "./App.css";
import Items from "./component/items";
import { useState } from "react";
import WelcomeMessage from "./component/welcomeMessage";

function App() {
  let [todoItems, setTodoItems] = useState([]);


  const handleonNewItem=(itemName,itemDueDate)=>{
      setTodoItems((currValue)=>[...currValue,{name:itemName,dueDate:itemDueDate}]);
  } //functional update;

  const handleDeleteItem=(todoItemName)=>{
      setTodoItems(()=>todoItems.filter(item=>item.name !==todoItemName));
  } //functional update;


  return (
    <center className="todo-container">
      <AppName />
      <Addtodo onNewItem={handleonNewItem} />
      {todoItems.length ===0 && <WelcomeMessage></WelcomeMessage>}
      <Items  listItems={todoItems}
        deleteItem={handleDeleteItem}
      ></Items>
    </center>
  );
}

export default App;
