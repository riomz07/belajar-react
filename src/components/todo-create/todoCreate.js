import { useState } from "react";

const TodoCreate = (props) => {
  const [getInputTodo, setInputTodo] = useState("");
  // Make Handler
  const handleSubmit = (event) => {
    //biar button submit tdk refresh
    event.preventDefault();
    //membuat nilai baru todo
    const newTodo = {
      id: Math.floor(Math.random() * 100 + 4),
      title: getInputTodo,
    };
    props.onCreateTodo(newTodo);
    setInputTodo("");
  };

  const handleInputTodo = (event) => {
    setInputTodo(event.target.value);
    console.log(getInputTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mx-5">
        <label className="form-label">Masukan Kegiatan</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputTodo} value={getInputTodo} />
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
};

export default TodoCreate;
