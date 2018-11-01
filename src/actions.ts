// action types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// other constants
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVATE: "SHOW_ACTIVATE"
};

// action creators
function addTodo(text: string) {
  return {
    type: ADD_TODO,
    text
  };
}

function toggleTodo(index: number) {
  return {
    type: TOGGLE_TODO,
    index
  };
}

function setVisibilityFilters(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
