import { useState, useEffect } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import './TodoController.scss';

function TodoController() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Saving to local storage (needs rework with npm package)

  function getLocalTodos() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    function todoFilterer() {
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
    todoFilterer();
    function saveLocalTodos() {
      localStorage.setItem("todos", JSON.stringify(todos))
    };
    saveLocalTodos();
  }, [todos, status]);

  return (
    <main>
      <CreateTodo todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
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