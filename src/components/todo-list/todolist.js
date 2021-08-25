const TodoList = (props) => {
  console.log(props.dataTodos);
  return (
    <ul className="align-center">
      {props.dataTodos.map((todo) => {
        return (
          <li key={todo.id} className="border border-2 border-success mx-5 p-3 mb-2">
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
