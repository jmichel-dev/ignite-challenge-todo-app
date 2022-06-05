import { Header } from "./components/Header";
import { ListTodo } from "./components/ListTodo";
import { NewTodoForm } from "./components/NewTodoForm";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <NewTodoForm />
      <ListTodo />
    </>
  );
}

export default App;
