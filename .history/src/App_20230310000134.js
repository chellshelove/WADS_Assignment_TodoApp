import React, {useState, useEffect} from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify("todos"));
  };
  
  return (
    <div className="todo-app">
      <header>
        <h1>Todo List</h1>
      </header>
      <header>
      <h1>Chellshe Love Simrochelle - 2502043040</h1>
      </header>
    
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}/>
      <TodoList  filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;