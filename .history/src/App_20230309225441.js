import React, {useState} from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted' :
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
    }
  }
  return (
    <div className="todo-app">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;