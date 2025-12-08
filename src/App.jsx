import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import styles from "./App.module.css";
import TodoList from "./components/ToDoList/TodoList";
import TodoFilters from "./components/TodoFilters/TodoFilters";
import { api } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchTodos = async () => {
    try {
      const data = await api.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      console.log("Failed to get todo's. Please try again.");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  const handleCreate = async (newTodo) => {
    try {
      await api.todos.create(newTodo);
      await fetchTodos();
    } catch (error) {
      console.log("Failed to get todo's. Please try again.");
    }
  };

  const handleUpdate = async (id, newTodo) => {
    try {
      await api.todos.update(id, newTodo);
      await fetchTodos();
    } catch (error) {
      console.log("Failed to create todo's. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.todos.delete(id);
      await fetchTodos();
    } catch (error) {
      console.log("Failed to delete todo's. Please try again.");
    }
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
