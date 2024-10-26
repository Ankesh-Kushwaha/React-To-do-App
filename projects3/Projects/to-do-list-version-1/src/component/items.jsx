/* eslint-disable react/jsx-key */
import TodoItem from "./todo-item";

const Items = ({ listItems, deleteItem }) => {
  return (
    <>
      <div className="items-container">
        {listItems.map((item) => (
          <TodoItem
            type={item.name}
            itemsName={item.name}
            itemsDate={item.dueDate}
            handleOnDelete={deleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default Items;
