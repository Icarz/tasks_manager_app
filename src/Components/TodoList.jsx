import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";
const TodoList = ({ todos, setTodos }) => {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
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
