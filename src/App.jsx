import TodoForm from "./components/TodoForm/TodoForm";
import styles from "./App.module.css";
import { useState } from "react";
import TodoList from "./components/ToDoList/TodoList";

const TODOS_DEFAULT = [
  {
    id: "1",
    name: "Buy an Ice Cream",
    description: "The white one with chocolate",
    deadline: "2025-02-09",
    priority: "low",
    completed: false,
  },
  {
    id: "2",
    name: "Sell old MacBook Pro 2025",
    description: "Try to sell it on OLX",
    deadline: "2025-02-28",
    priority: "high",
    completed: false,
  },
  {
    id: "3",
    name: "Charge Powerbank",
    description: "For the next travelling",
    deadline: "2025-02-15",
    priority: "medium",
    completed: true,
  },
  {
    id: "4",
    name: "Test Todo onlye with a name",
    description: "",
    deadline: "",
    priority: "none",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_DEFAULT);

  const handleCreate = (newTodo) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: `${prevTodo.length + 1}`, newTodo },
    ]);
  };

  const handleUpdate = (id, newTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? newTodo : todo))
    );
  };

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img
          className={styles.Logo}
          src="/public/assets/to-do.png"
          alt="Logo"
        />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>
      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        <TodoList todos={todos} onUpdate={handleUpdate} />
      </div>
    </div>
  );
}

export default App;
