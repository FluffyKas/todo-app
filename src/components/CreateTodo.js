import './CreateTodo.scss';

const CreateTodo = ({setInputText, setTodos, todos, inputText}) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  }
  const submitHandler = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.floor(Math.random()*1000)}
      ]);
      setInputText('');
    }
  }

  return ( 
    <form>
      <input type="text" onChange={handleChange} onKeyPress={submitHandler} value={inputText} placeholder="Create a new todo..."/>
    </form>
   );
}
 
export default CreateTodo;