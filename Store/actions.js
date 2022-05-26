import { ADD, REMOVE, DONE, FAVORITE } from './constants';

export const addTodos = (note) => ({
  type: ADD,
  payload: note,
});

export const removeTodo = (id) => ({
  type: REMOVE,
  payload: id,
});

export const completed = (id) => ({
  type: DONE,
  payload: id,
});

export const favoriteTodo = (id) => ({
  type: FAVORITE,
  payload: id,
})