import React, { useContext, useState } from "react";
import { Form, FormGroup, Input, Col, Button } from "reactstrap";
import TodoContext from "../context/todoContext/todoContext";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);

  const [todo, setTodo] = useState({ title: "" });
  const { title } = todo;

  const onChange = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormGroup row>
          <Col sm={10}>
            <Input
              type="text"
              name="title"
              id="todoInput"
              placeholder="Add a new task"
              onChange={onChange}
              value={title}
            />
          </Col>
        </FormGroup>
        <br />
        <Button size="lg" block color="secondary">
          Submit new task!
        </Button>
      </Form>
    </>
  );
};

export default AddTodo;
