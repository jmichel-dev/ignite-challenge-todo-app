import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Todo } from "../../types/todo";

import styles from "./ListItem.module.css";

interface ListItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

export const ListItem: React.FC<ListItemProps> = ({ todo, onDeleteTodo }) => {
  const [toggleTaskStatus, setToggleTaskStatus] = useState(todo.done);

  const handleToggleTaskStatus = () => {
    setToggleTaskStatus((status) => !status);
  };

  const handleDeleteTodo = (id: number) => {
    onDeleteTodo(id);
  };

  return (
    <li className={styles.listItem}>
      <div
        className={styles.containerCheckbox}
        onClick={handleToggleTaskStatus}
      >
        <input type="checkbox" checked={toggleTaskStatus} readOnly />
        <span className={styles.checkmark}></span>
      </div>
      <p className={styles.text}>{todo.todo}</p>
      <button
        className={styles.btnDelete}
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <AiOutlineDelete size={18} />
      </button>
    </li>
  );
};
