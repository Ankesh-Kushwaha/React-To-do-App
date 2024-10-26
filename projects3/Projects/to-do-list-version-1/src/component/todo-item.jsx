import { MdDelete } from "react-icons/md";

function TodoItem({type,itemsName,itemsDate,handleOnDelete}){
 return (
  
  <div className="container">
  <div className="row row-As">
    <div className="col-6">{itemsName}</div>
    <div className="col-4" >{itemsDate}</div>
    <div className="col-2">
    <button type="button" className="btn btn-danger"
    onClick={()=>{handleOnDelete(itemsName)}}
    >
        <MdDelete />
      </button>
    </div>
  </div>
  </div>
 );
}

export default TodoItem;