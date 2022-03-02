import { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const TodoController = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return ( 
    <main>
      <CreateTodo todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
   );
}
 
export default TodoController;