function TodoItem2(){
  let todoName='Go to college';
  let todoDate='24/10/2024';
return (
<div className="container">
<div className="row row-As">
  <div className="col-6">{todoName}</div>
  <div className="col-4">{todoDate}</div>
  <div className="col-2">
    <button type="button" className="btn btn-danger">
      Delete
    </button>
  </div>
</div>
</div>
);
}

export default TodoItem2;