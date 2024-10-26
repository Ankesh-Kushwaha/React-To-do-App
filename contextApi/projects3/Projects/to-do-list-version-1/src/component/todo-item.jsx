import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItemsStore";
import { useContext } from "react";

function TodoItem({itemsName, itemsDate }) {
  const {deleteItem}=useContext(TodoItemsContext)
 return (
  
  <div className="container">
  <div className="row row-As">
    <div className="col-6">{itemsName}</div>
    <div className="col-4" >{itemsDate}</div>
    <div className="col-2">
    <button type="button" className="btn btn-danger"
    onClick={()=>{deleteItem(itemsName)}}
    >
        <MdDelete />
      </button>
    </div>
  </div>
  </div>
 );
}

export default TodoItem;