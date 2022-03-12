import { FaRegEdit, FaCheck } from 'react-icons/fa';
import './Todo.scss';
import deleteIcon from '../images/icon-cross.svg';


function Todo({ todo, todos, setTodos, editTodoText, setEditTodoText }) {

  function deleteItem() {
    setTodos(todos.filter((element) => element.id !== todo.id));
  }

  function toggleCompleted() {
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

  function editItem() {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          editing: !item.editing
        };
      }
      return item;
    })
    );
  }

  function editTodoValue(e) {
    setEditTodoText(e.target.value)
  }

  function updateTodo(e) {
    e.preventDefault();
    setTodos(todos.map((item) => {
      if (editTodoText && item.id === todo.id) {
        return {
          ...item,
          text: editTodoText.trim(),
          editing: false
        };
      }
      return item;
    })
    );
  }

  return (

    <li className={`list-item ${todo.completed ? "completed" : ""} ${todo.editing ? "edit-style" : ""}`}>

      {todo.editing === true ?
        <form className="edit-surface">
          <div className="decor-btn" disabled={true} aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="none" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
          </div>
          <input onChange={editTodoValue} className={`edit-input ${todo.editing ? "edit-style" : ""}`} placeholder={todo.text}></input>
          <button onClick={updateTodo} className="submit-btn btn">
            <FaCheck className="submit-icon" />
          </button>
        </form> :
        <>
          <div className="item-left" onClick={toggleCompleted}>
            {
              todo.completed === false ?
                <button className="btn-empty check-btn btn" title="Mark item as completed." aria-label="Mark item as completed.">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="none" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
                </button> :
                <button className="completed-btn check-btn btn" aria-label="Mark item as incomplete.">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
                </button>
            }
            <p className="list-item-text">{todo.text}</p>
          </div>
          <div className="item-right">
            <button className="edit-btn btn" onClick={editItem}>
              <FaRegEdit className="edit-icon" />
            </button>
            <button className="delete-btn btn" onClick={deleteItem} aria-label="Delete item.">
              <img className="delete-icon" src={deleteIcon} alt="" />
            </button>
          </div>
        </>
      }

    </li>
  );
}

export default Todo;

