import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from "./actions";
const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todos(state = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
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

function visibilityFilter(state = SHOW_ALL, action: any) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todoApp(state = initialState, action: any) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}

export default todoApp;
