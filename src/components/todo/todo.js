import TodoCreate from "../todo-create/todoCreate";
import TodoList from "../todo-list/todolist";
import { useState } from "react";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, title: "Makan" },
    { id: 2, title: "Bubuk" },
    { id: 3, title: "Ngeseng" },
    { id: 4, title: "Kerjo" },
    { id: 5, title: "Balek" },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };

  return (
    <div className="text-center pt-5">
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};
export default Todo;
