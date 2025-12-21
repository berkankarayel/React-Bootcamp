function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className={todo.completed ? "done" : ""}>
      <span onClick={() => onToggle(todo)}>
        {todo.title}
      </span>

      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
