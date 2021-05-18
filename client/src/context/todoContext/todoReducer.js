import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TODOS_ERROR,
  COMPLETE_TODO,
} from "../types";

//* el reducer decide qué hacer con el state, basado en el action
//* el reducer es una función que se puede exportar default
//*el reducer toma (state, action), y del action tomamos el {type, payload}, que son lo que enviamos desde el State

export default (state, { type, payload }) => {
  //*evaluamos de acuerdo al type qué acción tomar. El state es inmutable, por eso hacemos el ...state para copiarlo.
  switch (type) {
    case GET_TODOS:
      //*el payload son todos los toDos
      return {
        ...state,
        todos: payload,
        error: null,
      };
    case ADD_TODO:
      return {
        ...state,
        //*le sumo el payload al state, entonces pone la nueva task al final!
        todos: [...state.todos, payload],
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
