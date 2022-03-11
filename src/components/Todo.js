import './Todo.scss';
import { ReactComponent as DeleteIcon } from '../images/icon-cross.svg';


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
      if (item.id === todo.id) {
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

    <li className={`list-item ${todo.completed ? "completed" : ""}`}>
      {todo.editing === true ?
        <>
          <input onChange={editTodoValue}></input>
          <button onClick={updateTodo}>Submit</button>
        </> :
        <>
          <span className="item-left" onClick={toggleCompleted}>
            {
              todo.completed === false ?
                <button className="btn-empty check-btn" title="Mark item as completed." aria-label="Mark item as completed.">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="none" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
                </button> :
                <button className="completed-btn check-btn" aria-label="Mark item as incomplete.">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
                </button>
            }
            <p className="list-item-text">{todo.text}</p>
          </span>
          <div>
            <button className="delete-btn" onClick={deleteItem} aria-label="Delete item.">
              <DeleteIcon />
            </button>
            <button className="edit-btn" onClick={editItem}>Edit</button>
          </div>
        </>
      }
    </li>
  );
}

export default Todo;