import { PRIORITY_DEFAULT } from "../../constants/priorities";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./TodoForm.module.css";
import ToDoFormFields from "../ToDoFormFields/ToDoFormFields";

const TodoForm = ({ onCreate }) => {
  const [show, setShow] = useState("Show");
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      description: "",
      deadline: "",
      priority: PRIORITY_DEFAULT,
      completed: false,
    },
  });

  const handleCreate = (data) => {
    onCreate(data);
    reset();
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

      <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>
        <ToDoFormFields register={register} show={show} />

        <input type="submit" value="Add" />
      </form>
    </section>
  );
};

export default TodoForm;
