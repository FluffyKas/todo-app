import './CreateTodo.scss';
import { v4 as uuidV4 } from 'uuid';

function CreateTodo({ inputText, setInputText, todos, setTodos }) {
  function handleChange(e) {
    setInputText(e.target.value.trimStart());
  }
  function submitHandler(e) {
    if (inputText && e.key === 'Enter') {
      e.preventDefault();
      setTodos([
        ...todos, { text: inputText.trim(), completed: false, id: uuidV4(), editing: false }
      ]);
      setInputText('');
    }
  }

  return (
    <form className="create-todo-form">
      <div className="decor-btn" disabled={true} aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="none" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
      </div>
      <input
        type="text"
        onChange={handleChange}
        onKeyPress={submitHandler}
        className="create-todo-input"
        value={inputText}
        placeholder="Create a new todo..."
      />
    </form>
  );
}

export default CreateTodo;
