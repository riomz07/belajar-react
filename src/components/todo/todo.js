import TodoCreate from "../todo-create/todoCreate";
import TodoList from "../todo-list/todolist";

const Todo = () => {
  const todos = [
    { id: 1, title: "Makan" },
    { id: 2, title: "Bubuk" },
    { id: 3, title: "Ngeseng" },
    { id: 4, title: "Kerjo" },
    { id: 5, title: "Balek" },
  ];

  return (
    <div className="text-center pt-5">
      <h3>Todo List</h3>
      <TodoCreate />
      <TodoList dataTodos={todos} />
    </div>
  );
};
export default Todo;
