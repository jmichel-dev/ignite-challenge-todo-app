import { Todo } from "../../types/todo";
import { ListItem } from "../ListItem";
import { ListTodoEmpty } from "../ListTodoEmpty";
import styles from "./ListTodo.module.css";

interface ListTodoProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleDone: (id: number) => void;
}

export const ListTodo: React.FC<ListTodoProps> = ({
  todos,
  onDeleteTodo,
  onToggleDone,
}) => {
  let contentTodoList = <ListTodoEmpty />;

  if (todos.length > 0) {
    contentTodoList = (
      <ul className={styles.list}>
        {todos.map((todo) => (
          <ListItem
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleDone={onToggleDone}
          />
        ))}
      </ul>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.content}>
          <span className={styles.created}>Tarefas criadas</span>
          <span className={styles.badge}>{todos.length}</span>
        </div>
        <div className={styles.content}>
          <span className={styles.done}>Tarefas concluídas</span>
          <span className={styles.badge}>0</span>
        </div>
      </header>
      {contentTodoList}
    </div>
  );
};
