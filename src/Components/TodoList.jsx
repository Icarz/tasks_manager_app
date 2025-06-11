import TodoItems from "./TodoItems";
import styles from "./todolist.module.css"
const TodoList = ({ todos }) => {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
