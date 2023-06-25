import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./components/NewTodoForm";

function App() {
  
  const [todos, setTodos] = useState([]); 

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo;
      })
    })
  }

  function deleteToDo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo=> todo.id !==id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No todos found"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteToDo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
