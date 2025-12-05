import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";
import { yupResolver } from "@hookform/resolvers/yup";
import getTodoSchema from "../../schemas/todo";
import styles from "./ToDoFormFields.module.css";

const ToDoFormFields = ({ todo = {}, show = true, register, errors = {} }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.FormField}>
        <input
          type="text"
          aria-label="Name*"
          placeholder="Name*"
          autoComplete="off"
          defaultValue={todo.name}
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {!!errors.name && (
          <span style={{ fontSize: "10px", color: "red", marginLeft: "5px" }}>
            {errors.name.message}
          </span>
        )}
      </div>

      {show && (
        <div className={styles.FormFields}>
          <div className={styles.FormField}>
            <textarea
              aria-label="Description"
              placeholder="Description"
              rows="3"
              defaultValue={todo.description}
              aria-invalid={!!errors.description}
              {...register("description")}
            />
            {!!errors.description && (
              <span
                style={{ fontSize: "10px", color: "red", marginLeft: "5px" }}
              >
                {errors.description.message}
              </span>
            )}
          </div>

          <div className={styles.FormGroup}>
            <div className={styles.FormField}>
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                defaultValue={todo.deadline}
                aria-invalid={!!errors.deadline}
                {...register("deadline")}
                // {...register("deadline", {
                //   min: !todo.id && {
                //     value: new Date().toISOString().split("T")[0],
                //     message: "Deadline can't be date in the past",
                //   },
                // })}
              />
              {!!errors.deadline && (
                <span
                  style={{ fontSize: "10px", color: "red", marginLeft: "5px" }}
                >
                  {errors.deadline.message}
                </span>
              )}
            </div>

            <div className={styles.FormField}>
              <label htmlFor="priority">Priority</label>
              <select
                defaultValue={todo.priority ?? PRIORITY_DEFAULT}
                id="priority"
                aria-invalid={!!errors.priority}
                {...register("priority")}
              >
                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
              {!!errors.priority && errors.priority.message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoFormFields;
