import { FormEvent, useState } from "react";
import PlusIcon from "../../assets/img/plus.png";
import { Todo } from "../../types/todo";

import styles from "./NewTodoForm.module.css";

interface NewTodoFormProps {
  onAddNewTodo: (todo: Todo) => void;
}

export const NewTodoForm: React.FC<NewTodoFormProps> = ({ onAddNewTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitNewTodo = (e: FormEvent) => {
    e.preventDefault();

    if (!title) return;

    const todo: Todo = {
      id: Math.random(),
      todo: title,
      done: false,
    };

    onAddNewTodo(todo);
    setTitle("");
  };
  return (
    <form className={styles.container} onSubmit={handleSubmitNewTodo}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className={styles.btn} type="submit">
        <span>Criar</span>
        <img src={PlusIcon} />
      </button>
    </form>
  );
};
