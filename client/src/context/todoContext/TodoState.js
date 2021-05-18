import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import axios from "axios";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TODOS_ERROR,
  COMPLETE_TODO,
} from "../types";

//* acá van las actions

const TodoState = (props) => {
  const initialState = {
    todos: [],
    error: null,
  };

  //*se hace dispatch a un reducer, se llama la action y se envía un type al reducer
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // get todos
  const getTodos = async () => {
    try {
      const res = await axios.get("/todos");
      // console.log(res.data);
      dispatch({
        //*en los dispatch paso el type que creé en el reducerm así los conecto. El payload es la data que van a enviar, es el response
        type: GET_TODOS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TODOS_ERROR,
        payload: "hubo un error",
      });
    }
  };

  // Add Todo
  const addTodo = async (todo) => {
    const config = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.post("/todos", todo, config);
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TODOS_ERROR,
        payload: "hubo un error",
      });
    }
  };

  // remove todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/todos/${id}`);
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TODOS_ERROR,
        payload: "hubo un error",
      });
    }
  };

  // complete todo
  const completeTodo = async (todo) => {
    console.log(todo);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(`/todos/${todo}`, config);
      // console.log('patch', res.data)
      dispatch({
        type: COMPLETE_TODO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TODOS_ERROR,
        payload: "hubo un error",
      });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        getTodos,
        deleteTodo,
        completeTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
