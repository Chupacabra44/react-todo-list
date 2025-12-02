import TodoForm from "./components/TodoForm/TodoForm";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (newTodo) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: `${prevTodo.length + 1}`, newTodo },
    ]);
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
        {JSON.stringify(todos)}
      </div>
    </div>
  );
}

export default App;
