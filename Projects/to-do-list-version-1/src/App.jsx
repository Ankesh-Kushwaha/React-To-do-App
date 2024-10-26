 
import AppName from "./component/AppName";
import Addtodo from "./component/Add-todo";
import TodoItem from "./component/todo-item";
import TodoItem2 from "./component/todo-item2";
import './App.css'
 


function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <Addtodo/>
      <div className="items-container">
          <TodoItem/>
          <TodoItem2/>
      </div>
      
    </center>
  );
}

export default App;
