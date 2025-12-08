import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Backdrop}>
      <div className={styles.Loader} />
    </div>
  );
};

export default Loader;
