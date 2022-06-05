import { useState } from "react";
import { Header } from "./components/Header";
import { ListTodo } from "./components/ListTodo";
import { NewTodoForm } from "./components/NewTodoForm";
import "./styles/global.css";
import { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todo: Todo) => {
    setTodos((currentTodos) => [...currentTodos, todo]);
  };

  return (
    <>
      <Header />
      <NewTodoForm onAddNewTodo={handleAddTodo} />
      <ListTodo todos={todos} />
    </>
  );
}

export default App;
