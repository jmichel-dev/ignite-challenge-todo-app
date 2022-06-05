import Clipboard from "../../assets/img/clipboard.png";

import styles from "./ListTodoEmpty.module.css";

export const ListTodoEmpty: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="" />
      <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer.
      </p>
    </div>
  );
};
