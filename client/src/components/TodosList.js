import React, { useContext, useEffect } from "react";
import Todo from "./Todo";
import todoContext from "../context/todoContext/todoContext";
import { Badge, Row } from "reactstrap";

const TodosList = () => {
    const { todos, getTodos } = useContext(todoContext);

  useEffect(() => {
    getTodos();
        // eslint-disable-next-line
  }, []);

  if(todos !== null && todos.length === 0 ) {
    <Badge>Create a task!</Badge>
  }

  return (
    <>          
    <Row xs="3">
      {todos.length > 0 && todos.map((todo) => (
        <Todo todo={todo} key={todo._id} />
      ))
      }
      </Row>
    </>
  );
};

export default TodosList;
