import './CreateTodo.scss';

const CreateTodo = ({ inputText, setInputText, todos, setTodos }) => {
  const handleChange = (e) => {
    setInputText(e.target.value.trimStart());
  }
  const submitHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setTodos([
        ...todos, { text: inputText.trim(), completed: false, id: Math.floor(Math.random() * 1000) }
      ]);
      setInputText('');
    }
  }

  return (
    <form className="create-todo-form">
      <button className="decor-btn" aria-label="Mark item as completed.">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="none" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
      </button>
      <input type="text" onChange={handleChange} onKeyPress={submitHandler} value={inputText} placeholder="Create a new todo..." />
    </form>
  );
}

export default CreateTodo;