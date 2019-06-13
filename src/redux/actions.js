import {ADD_TODO, TOGGLE_TODO} from './reducers/todo/actionTypes';

function addTodo(text) {
  return {type: ADD_TODO, text}
};

function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

export {
  addTodo,
  toggleTodo
}