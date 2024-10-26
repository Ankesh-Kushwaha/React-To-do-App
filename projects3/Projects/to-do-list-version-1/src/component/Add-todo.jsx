import { useRef} from "react";
import { MdAddTask } from "react-icons/md";

function Addtodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleAddButtonClick}>
        <div className="row row-As">
          <div className="col-6">
            <input
              type="text"
              placeholder="enter to do here"
              ref={todoNameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button type="Submit" className="btn btn-success">
              <MdAddTask />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
