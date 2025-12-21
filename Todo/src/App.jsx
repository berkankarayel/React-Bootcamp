import { useEffect, useState } from "react";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "./services/todoservices";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // LISTELE
  useEffect(() => {
    getTodos().then((res) => setTodos(res.data));
  }, []);

  // EKLE
  const handleAddTodo = (title) => {
    const newTodo = { title, completed: false };

    addTodo(newTodo).then((res) => {
      setTodos([...todos, res.data]);
    });
  };

  // SİL
  const handleDeleteTodo = (id) => {
    deleteTodo(id).then(() => {
      setTodos(todos.filter((t) => t.id !== id));
    });
  };

  // GÜNCELLE (completed)
  const handleToggleTodo = (todo) => {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed,
    };

    updateTodo(todo.id, updatedTodo).then((res) => {
      setTodos(
        todos.map((t) =>
          t.id === todo.id ? res.data : t
        )
      );
    });
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <TodoForm onAddTodo={handleAddTodo} />

      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
}

export default App;
