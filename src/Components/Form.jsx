import { useState } from "react";
import styles from "./form.module.css";
const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault(); // this to prevent the refreshing for the page when we click on the button//
    setTodos([...todos, todo]); // the spread operator keeps the pervious values in the array//
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <div className={styles.fromContainer}>
          <input
            className={styles.modernInput}
            value={todo.name}
            type="text"
            placeholder="your tasks here ..."
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
