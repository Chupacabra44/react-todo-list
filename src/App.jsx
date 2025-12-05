import TodoForm from "./components/TodoForm/TodoForm";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import TodoList from "./components/ToDoList/TodoList";
import TodoFilters from "./components/TodoFilters/TodoFilters";

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchTodos = () => {
    fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(setTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreate = (newTodo) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: `${prevTodo.length + 1}`, ...newTodo },
    ]);
  };

  const handleUpdate = (id, newTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? newTodo : todo))
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filterTodos = (todo) => {
    const { completed, priority } = filters;

    return (
      (completed === "" || todo.completed === completed) &&
      (priority === "" || todo.priority === priority)
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
        <TodoFilters onFilter={setFilters} />
        <TodoList
          todos={todos.filter(filterTodos)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
