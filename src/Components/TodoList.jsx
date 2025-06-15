import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";
const TodoList = ({ todos, setTodos }) => {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
