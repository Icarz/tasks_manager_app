import styles from "./todoitems.module.css";
const TodoItems = ({ item }) => {
  return (
    <div className={styles.items}>
      <div className={styles.itemsContainer}>
        <div className={styles.itemName}>
          {item}
          <span>
            <button className={styles.deleteButton}>x</button>
          </span>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItems;
