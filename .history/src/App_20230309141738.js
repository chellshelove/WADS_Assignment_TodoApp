import React from 'react';
import './App.css';
//importing components
import Form from './components/Form';

function App() {
  return (
    <div className="todo-app">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;