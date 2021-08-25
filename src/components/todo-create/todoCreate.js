const TodoCreate = () => {
  // Make Handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100 + 4),
      title: "Learn React",
    };
    console.log(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3 mx-5">
        <label for="exampleInputEmail1" class="form-label">
          Masukan Kegiatan
        </label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" class="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
};

export default TodoCreate;
