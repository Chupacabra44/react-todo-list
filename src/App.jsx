import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import styles from "./App.module.css";
import TodoList from "./components/ToDoList/TodoList";
import TodoFilters from "./components/TodoFilters/TodoFilters";
import { api } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchTodos = () => {
    api.todos.getAll(filters).then(setTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  const handleCreate = (newTodo) => {
    api.todos.create(newTodo).then(fetchTodos);
  };

  const handleUpdate = (id, newTodo) => {
    api.todos.update(id, newTodo).then(fetchTodos);
  };

  const handleDelete = (id) => {
    api.todos.delete(id).then(fetchTodos);
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
          todos={todos}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
