import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    console.logs(todos);
    return(
        <div className="todo-container">
      <ul className="todo-list"></ul>
    </div>
    );
};

export default TodoList;