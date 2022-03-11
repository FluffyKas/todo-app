import './TodoList.scss';

import Todo from "./Todo";

function TodoList({ todos, setTodos, setStatus, filteredTodos, editTodoText, setEditTodoText }) {

  function deleteCompleted() {
    setTodos(todos.filter(todo => todo.completed === false));
  };

  function statusHandler(e) {
    setStatus(e.target.innerHTML.toLowerCase());
  }

  return (
    <div className="todo-wrapper">

      {/* TODO LIST */}
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos !== '' && filteredTodos.map((todo) => {
            return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} editTodoText={editTodoText}
              setEditTodoText={setEditTodoText} />
          })
          }
        </ul>

        {/* LIST FUNCTIONS */}
        <div className="list-functions">
          <p className="list-item-count">{filteredTodos.length} items left</p>
          <ul className="list-filters">
            <li>
              <button onClick={statusHandler} className="filter-btn filter-all">All</button>
            </li>
            <li>
              <button onClick={statusHandler} className="filter-btn filter-active">Active</button>
            </li>
            <li>
              <button onClick={statusHandler} className="filter-btn filter-completed">Completed</button>
            </li>
          </ul>
          <button className="clear-list-btn" onClick={deleteCompleted}>Clear completed</button>
        </div>

      </div>

      {/* FILTER MENU FOR MOBILE */}
      <ul className="list-filters-mobile">
        <li>
          <button onClick={statusHandler} className="filter-btn filter-all">All</button>
        </li>
        <li>
          <button onClick={statusHandler} className="filter-btn filter-active">Active</button>
        </li>
        <li>
          <button onClick={statusHandler} className="filter-btn filter-completed">Completed</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;