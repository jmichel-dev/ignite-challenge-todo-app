import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Todo } from "../../types/todo";

import styles from "./ListItem.module.css";

interface ListItemProps {
  todo: Todo;
}

export const ListItem: React.FC<ListItemProps> = ({ todo }) => {
  const [toggleTaskStatus, setToggleTaskStatus] = useState(todo.done);

  const handleToggleTaskStatus = () => {
    setToggleTaskStatus((status) => !status);
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
      <button className={styles.btnDelete}>
        <AiOutlineDelete size={18} />
      </button>
    </li>
  );
};
