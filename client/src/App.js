import { Jumbotron } from "reactstrap";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodosList from "./components/TodosList";
import TodoState from "./context/todoContext/TodoState";

const App = () => {
  return (
    <TodoState>
      <Header />
      <Jumbotron className="m-5" fluid>
        <AddTodo />
        <br />
        <TodosList />
      </Jumbotron>
    </TodoState>
  );
};

export default App;
