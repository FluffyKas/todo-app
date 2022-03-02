import { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const TodoController = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return ( 
    <main>
      <CreateTodo setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText}/>
      <TodoList todos={todos} />
    </main>
   );
}
 
export default TodoController;