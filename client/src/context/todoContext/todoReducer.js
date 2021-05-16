import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TODOS_ERROR,
  COMPLETE_TODO,
} from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
        error: null,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
        todo._id === payload._id ? !payload : todo
        ),
      };
    case TODOS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
