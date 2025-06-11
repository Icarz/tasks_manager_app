import TodoItems from "./TodoItems";
const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
