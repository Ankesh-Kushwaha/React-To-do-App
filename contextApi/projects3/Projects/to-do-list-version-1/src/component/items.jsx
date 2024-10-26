/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { TodoItemsContext } from "../store/todoItemsStore";
import { useContext } from "react";
import TodoItem from "./todo-item";

const Items = () => {

  const {todoItems} = useContext(TodoItemsContext);
  
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            itemsName={item.name}
            itemsDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
};

export default Items;
