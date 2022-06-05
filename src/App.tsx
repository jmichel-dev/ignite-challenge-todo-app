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

  const handleDeleteTodo = (id: number) => {
    const findTodo = todos.find((todoItem) => todoItem.id === id);

    if (!findTodo) return;

    setTodos((currentTodos) => {
      const filteredTodosWithoutTheDeletedOne = currentTodos.filter(
        (todoItem) => todoItem.id !== id
      );

      return [...filteredTodosWithoutTheDeletedOne];
    });
  };

  const handleToggleDoneTodo = (id: number) => {
    const findTodo = todos.find((todoItem) => todoItem.id === id);

    if (!findTodo) return;

    const updatedTodo = { ...findTodo, done: !findTodo.done };

    setTodos((currentTodos) => {
      const filteredTodosWithoutTheUpdatedOne = currentTodos.filter(
        (todoItem) => todoItem.id !== id
      );

      return [...filteredTodosWithoutTheUpdatedOne, updatedTodo];
    });
  };

  return (
    <>
      <Header />
      <NewTodoForm onAddNewTodo={handleAddTodo} />
      <ListTodo
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleDone={handleToggleDoneTodo}
      />
    </>
  );
}

export default App;
