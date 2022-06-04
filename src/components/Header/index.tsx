import TodoLogo from "../../assets/img/todo-logo.png";

export const Header: React.FC = () => {
  return (
    <header>
      <img src={TodoLogo} alt="Todo app logo" />
    </header>
  );
};
