import { createStore } from 'redux';
import { ADD, REMOVE, DONE, FAVORITE } from './constants';

const initialState = {
  todos: [
    {
      text: 'Some text content',
      id: 1,
      done: false,
    },
  ],
};

const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.payload],
      };

    case REMOVE:
      return {
        todos: state.todos.filter((note) => note.id !== action.payload),
      };

    case DONE:
      const newToDoState = [...state.todos];
      const foundIndex = newToDoState.findIndex(
        (note) => note.id === action.payload
      );
      newToDoState[foundIndex] = {
        ...newToDoState[foundIndex],
        done: !newToDoState[foundIndex].done,
      };

      return {
        todos: newToDoState,
      };

    case FAVORITE:
      const addFavorite = [...state.todos];
      const FavIndex = addFavorite.findIndex(
        (note) => note.id === action.payload
      );
      addFavorite[FavIndex] = {
        ...addFavorite[FavIndex],
        favorite : !addFavorite[FavIndex].favorite,
      }
      return {
        todos: addFavorite
      }

    default:
      return state;
  }
};

export const store = createStore(noteReducer, initialState);
