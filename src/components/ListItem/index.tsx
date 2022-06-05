import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import styles from "./ListItem.module.css";

export const ListItem: React.FC = () => {
  const [toggleTaskStatus, setToggleTaskStatus] = useState(true);

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
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint explicabo
        laborum, quaerat odio blanditiis molestias.
      </p>
      <button className={styles.btnDelete}>
        <AiOutlineDelete size={18} />
      </button>
    </li>
  );
};
