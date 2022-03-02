import './Todo.scss';
import { ReactComponent as CheckIcon } from '../images/icon-check.svg';
import { ReactComponent as DeleteIcon } from '../images/icon-cross.svg';


const Todo = ({ todo, todos, setTodos }) => {
  const deleteItem = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  }

  return (
    <li className="list-item">
      <span className="item-left">
        <button className="complete-btn" aria-label="Mark item as completed.">
          <CheckIcon />
        </button>
        {todo.text}
      </span>
      <button className="delete-btn" onClick={deleteItem} aria-label="Delete item.">
        <DeleteIcon />
      </button>
    </li>
  );
}

export default Todo;