import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";
import styles from "./ToDoFormFields.module.css";

const ToDoFormFields = ({ todo, show = true, register }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.FormField}>
        <input
          type="text"
          aria-label="Name*"
          placeholder="Name*"
          autoComplete="off"
          defaultValue={todo?.name}
          {...register("name", { required: true, minLength: 3, maxLength: 50 })}
        />
      </div>

      {show && (
        <>
          <div className={styles.FormField}>
            <textarea
              aria-label="Description"
              placeholder="Description"
              rows="3"
              defaultValue={todo?.description}
              {...register("description", { maxLength: 200 })}
            />
          </div>

          <div className={styles.FormGroup}>
            <div className={styles.FormField}>
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                defaultValue={todo?.deadline}
                {...register(
                  "deadline",
                  !todo?.id && {
                    min: new Date().toISOString().split("T")[0],
                  }
                )}
              />
            </div>

            <div className={styles.FormField}>
              <label htmlFor="priority">Priority</label>
              <select
                defaultValue={todo?.priority ?? PRIORITY_DEFAULT}
                id="priority"
                {...register("priority")}
              >
                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoFormFields;
