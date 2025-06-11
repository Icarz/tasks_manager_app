import styles from "./todoitems.module.css";
const TodoItems = ({ item }) => {
  return (
    <div className={styles.items}>
      <div className={styles.itemName}>{item}</div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItems;
