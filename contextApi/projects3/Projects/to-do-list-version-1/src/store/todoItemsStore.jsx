import { createContext,useReducer } from "react";

export const TodoItemsContext = createContext([
  {
    todoItems: [],
    addNewItem: ()=>{},
    deleteItem: ()=>{},
  },
]);


const TodoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newTodoItems;
};


const TodoItemsContextProvider=({children}) => {
  //let [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(TodoItemsReducer, []);
  //it takes an action and an initial value;

  const addNewItem = (itemName, itemDueDate) => {
    const newItemsAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemsAction);

    //setTodoItems((currValue)=>[...currValue,{name:itemName,dueDate:itemDueDate}]);
  }; //functional update;

  const deleteItem = (todoItemName) => {
    //setTodoItems(() => todoItems.filter(item => item.name !== todoItemName));

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  }; //functional update;

  return (
      <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}>
       {children}
      </TodoItemsContext.Provider>
      
  );
}

export default TodoItemsContextProvider;