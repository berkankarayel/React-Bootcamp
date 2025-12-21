import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTodo(title);
    setTitle("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yeni todo gir"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Ekle</button>
    </form>
  );
}

export default TodoForm;
