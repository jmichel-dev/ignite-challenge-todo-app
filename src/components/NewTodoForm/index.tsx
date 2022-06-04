import PlusIcon from "../../assets/img/plus.png";

import styles from "./NewTodoForm.module.css";

export const NewTodoForm: React.FC = () => {
  return (
    <form className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.btn} type="submit">
        <span>Criar</span>
        <img src={PlusIcon} />
      </button>
    </form>
  );
};
