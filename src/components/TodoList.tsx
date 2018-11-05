import * as React from "react";
import * as PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }: { todos: any; onTodoClick: any }) => (
  <ul>
    {todos.map((todo: any, index: number) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ),
  onTodoClick: PropTypes.func
};

export default TodoList;
