import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  VisibilityFilters,
} from 'actions';
import { combineReducers } from 'redux';
const { SHOW_ALL } = VisibilityFilters;

function todos(state: any = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo: any, index: number) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state: string = SHOW_ALL, action: any) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
