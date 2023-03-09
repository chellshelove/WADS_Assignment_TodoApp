import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.test || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }

  return (
    <div>
        <h1>What's the Plan for Today?</h1>
        <p>Chellshe Love Simrochelle - 2502043040</p>
        <TodoForm onSubmit={addTodo}/>
    </div>
  )
}

export default TodoList