
export function TodoItem({ completed, id, title, toggleTodo, deleteToDo }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteToDo(id)}>
        Delete
      </button>
    </li>
  );
}