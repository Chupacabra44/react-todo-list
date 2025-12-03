import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onUpdate }) => {
  const handleCompleted = (event) => {
    onUpdate(todo.id, { ...todo, completed: event.target.checked });
  };
  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      <div className={styles.Content}>
        <input
          type="checkbox"
          name="completed"
          checked={todo.completed}
          onChange={handleCompleted}
          className={styles.Status}
        />
        <div className={styles.Info}>
          {todo.name}
          {todo.description && (
            <span className={styles.Description}>{todo.description}</span>
          )}
          <div className={styles.AdditionalInfo}>
            {todo.deadline}{" "}
            {todo.priority !== PRIORITY_DEFAULT && (
              <span style={{ color: PRIORITIES[todo.priority]?.color }}>
                {PRIORITIES[todo.priority]?.label}
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
