import TodoLogo from "../../assets/img/todo-logo.png";

import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="Todo app logo" />
    </header>
  );
};
