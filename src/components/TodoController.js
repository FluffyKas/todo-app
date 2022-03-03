import { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import './TodoController.scss';

const TodoController = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return ( 
    <main>
      <CreateTodo todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} />
      <p className="drag-and-drop-msg">Drag and drop to reorder list</p>
    </main>
   );
}
 
export default TodoController;