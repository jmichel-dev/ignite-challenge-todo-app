import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Todo } from "../../types/todo";

import styles from "./ListItem.module.css";

interface ListItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onToggleDone: (id: number) => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  todo,
  onDeleteTodo,
  onToggleDone,
}) => {
  const handleToggleTaskStatus = (id: number) => {
    onToggleDone(id);
  };

  const handleDeleteTodo = (id: number) => {
    onDeleteTodo(id);
  };

  return (
    <li className={styles.listItem}>
      <div
        className={styles.containerCheckbox}
        onClick={() => handleToggleTaskStatus(todo.id)}
      >
        <input type="checkbox" checked={todo.done} readOnly />
        <span className={styles.checkmark}></span>
      </div>
      <p className={`${todo.done ? styles.textDone : styles.text}`}>
        {todo.todo}
      </p>
      <button
        className={styles.btnDelete}
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <AiOutlineDelete size={18} />
      </button>
    </li>
  );
};
