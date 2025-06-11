import { useState } from "react";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todo, setTodo] = useState(""); // this is only for the input values to have the dynamic//
  const [todos, setTodos] = useState([]); // this is for the array of data that must me in the array //

  function handleSubmit(e) {
    e.preventDefault(); // this to prevent the refreshing for the page when we click on the button//
    setTodos([...todos, todo]); // the spread operator keeps the pervious values in the array//
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="your tasks here ..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
};

export default Todo;
