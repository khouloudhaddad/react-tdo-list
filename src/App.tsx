import { useEffect, useState } from "react";
import "./styles.css";
import  NewTodoForm  from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  
  const [todos, setTodos] = useState(() => {
    const currentTodos = localStorage.getItem("ITEMS");
    if (currentTodos == null) return []
    
    return JSON.parse(currentTodos);
  }); 

  //save todos in local storage everytime todos list changes
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  },[todos])

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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
    </>
  );
}

export default App;
