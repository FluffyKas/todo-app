import { useState, useEffect } from 'react';
import CreateTodo from './CreateTodo';
import { v4 as uuidV4 } from 'uuid';
import TodoList from './TodoList';
import './TodoController.scss';

const TodoController = () => {

  const initialTodos = [
    { text: 'Pick up groceries', completed: false, id: uuidV4(), editing: false },
    { text: 'Go for a jog', completed: false, id: uuidV4(), editing: false },
    { text: '10 minutes meditation', completed: false, id: uuidV4(), editing: false },
    { text: 'Read for an hour', completed: false, id: uuidV4(), editing: false }
  ]

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(initialTodos);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [editTodoText, setEditTodoText] = useState('');

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
        editTodoText={editTodoText}
        setEditTodoText={setEditTodoText}
      />
      <p className="drag-and-drop-msg">Drag and drop to reorder list</p>
    </main>
  );
}

export default TodoController;