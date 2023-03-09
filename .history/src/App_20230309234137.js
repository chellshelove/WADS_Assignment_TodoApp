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

 // useEffect(() => {
   // getLocalTodos();
 // }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted' :
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default:
            setFilteredTodos(todos);
            break;
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify("todos"));
  };
  //const getLocalTodos = () => {
   // if(localStorage.getItem("todos") === null){
      //localStorage.setItem("todos", JSON.stringify([]));
   // } else{
    // let todolocal = JSON.parse(localStorage.getItem("todos"));
    // setTodos(todolocal);
   // }
  //};

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
      <TodoList  filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;