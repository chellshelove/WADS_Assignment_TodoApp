import React from 'react'

const Todo = ({ text, setTodos={setTodos}, todos={todos}}) => {
    const deleteHandler = () => {

    }
    return(
        <div className="todo">
            <li className="todo-item">h{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button  className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;