import { ListTodoEmpty } from "../ListTodoEmpty";
import styles from "./ListTodo.module.css";

export const ListTodo: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.content}>
          <span className={styles.created}>Tarefas criadas</span>
          <span className={styles.badge}>0</span>
        </div>
        <div className={styles.content}>
          <span className={styles.done}>Tarefas concluídas</span>
          <span className={styles.badge}>0</span>
        </div>
      </header>
      <ListTodoEmpty />
    </div>
  );
};
