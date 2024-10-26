function Addtodo(){
    return (
    <div className="container">
    <div className="row row-As">
      <div className="col-6">
        <input type="text" placeholder="enter to do here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
    </div>
    );
}

export default Addtodo;