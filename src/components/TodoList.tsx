import { TodoItem } from "./TodoItem";

export default TodoList({todos, toggleTodo, deleteToDo}){

    return (
    <ul className="list">
        {todos.length === 0 && "No todos found"}
        {todos.map((todo) => {
          return (
              <TodoItem
                  {...todo}
                  toggleTodo={toggleTodo}
                  deleteToDo={deleteToDo}
                  key={todo.id}
              />
          );
        })}
    </ul>
    )
}