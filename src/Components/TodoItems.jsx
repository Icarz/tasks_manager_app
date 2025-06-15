import styles from "./todoitems.module.css";
const TodoItems = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const line = item.done ? styles.completed : "";
  return (
    <div className={styles.items}>
      <div className={styles.itemsContainer}>
        <div className={styles.itemName}>
          <span className={line} onClick={() => handleClick(item.name)}>
            {" "}
            {item.name}
          </span>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deleteButton}
            >
              x
            </button>
          </span>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItems;
