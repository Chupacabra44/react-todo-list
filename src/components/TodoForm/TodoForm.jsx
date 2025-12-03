import { PRIORITY_DEFAULT } from "../../constants/priorities";
import { useState } from "react";
import styles from "./TodoForm.module.css";
import ToDoFormFields from "../ToDoFormFields/ToDoFormFields";

const TodoForm = ({ onCreate }) => {
  const [show, setShow] = useState("Show");

  const handleSubmit = (event) => {
    event.preventDefault();

    const { elements } = event.target;
    if (elements.name.value === "") {
      return;
    }

    onCreate({
      name: elements.name.value,
      description: elements.description?.value ?? "",
      deadlne: elements.deadline?.value ?? "",
      priority: elements.priority?.value ?? PRIORITY_DEFAULT,
      completed: false,
    });

    event.target.reset();
  };

  const handleShowHide = () => {
    setShow((prev) => !prev);
  };

  return (
    <section>
      <div className={styles.container}>
        <h3 className={styles.Title}>New To-Do</h3>
        <button onClick={handleShowHide}>
          {!show ? "Show All fields" : "Hide All fields"}
        </button>
      </div>

      <form className={styles.Form} onSubmit={handleSubmit}>
        <ToDoFormFields show={show} />

        <input type="submit" value="Add" />
      </form>
    </section>
  );
};

export default TodoForm;
