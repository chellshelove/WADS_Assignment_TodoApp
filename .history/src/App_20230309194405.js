import React, {useState} from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputTtext] = useState("");
  return (
    <div className="todo-app">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setInputTtext={setInputTtext}/>
      <TodoList />
    </div>
  );
}

export default App;