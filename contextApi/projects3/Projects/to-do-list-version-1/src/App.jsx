import AppName from "./component/AppName";
import Addtodo from "./component/Add-todo";
import "./App.css";
import Items from "./component/items";
import WelcomeMessage from "./component/welcomeMessage";
import TodoItemsContextProvider from "./store/todoItemsStore";

function App() {
   
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <Addtodo />
        <WelcomeMessage></WelcomeMessage>
        <Items></Items>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
