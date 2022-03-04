import { useState, useEffect } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import './TodoController.scss';

const TodoController = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

 //Saving to local storage (needs rework with npm package)

 const saveLocalTodos = () => {
   localStorage.setItem("todos", JSON.stringify(todos))
 };

 const getLocalTodos = () => {
   if(localStorage.getItem("todos") === null) {
     localStorage.setItem("todos", JSON.stringify([]));
   } else {
     let todoLocal = JSON.parse(localStorage.getItem("todos"))
     setTodos(todoLocal);
   }
 };

  const todoFilterer = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'active': 
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    todoFilterer();
    saveLocalTodos();
  }, [todos, status]);

  return ( 
    <main>
      <CreateTodo todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList 
      todos={todos}
      setTodos={setTodos} 
      status={status} 
      setStatus={setStatus} 
      filteredTodos={filteredTodos} 
      setFilteredTodos={setFilteredTodos}
      />
      <p className="drag-and-drop-msg">Drag and drop to reorder list</p>
    </main>
   );
}
 
export default TodoController;