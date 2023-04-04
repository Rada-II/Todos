import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://dummyjson.com/todos");
      const data = await res.json();
      const randomIndexes = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * data.todos.length)
      );
      const randomTodos = randomIndexes.map((index) => data.todos[index]);
      setTodos(randomTodos);
    };

    fetchTodos().catch((err) => console.error(err));
  }, []);

  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>Random Todos</h1>
      <button className="reload-button" onClick={handleReloadClick}>
        Reload
      </button>
      <ul className="list">
        {todos.map((todo) => (
          <li className="item" key={todo.id}>
            <p>{todo.todo}</p>
            <p>Completed: {todo.completed.toString()}</p>
            <p>User ID: {todo.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
