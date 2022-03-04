import './Todo.scss';
import { ReactComponent as DeleteIcon } from '../images/icon-cross.svg';


const Todo = ({ todo, todos, setTodos }) => {

  const deleteItem = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  }

  const markCompleted = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
    );
  };

  return (
    <li className={`list-item ${todo.completed ? "completed" : ""}`}>
      <span className="item-left">
        {
          todo.completed === false ?
            <button className="btn-empty check-btn" onClick={markCompleted} aria-label="Mark item as completed.">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="none" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg>
            </button> :
            <button className="completed-btn check-btn" aria-label="Mark item as incomplete.">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg>
            </button>
        }
        <p className="list-item-text">{todo.text}</p>
      </span>
      <button className="delete-btn" onClick={deleteItem} aria-label="Delete item.">
        <DeleteIcon />
      </button>
    </li>
  );
}

export default Todo;