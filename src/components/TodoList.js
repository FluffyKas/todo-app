import './TodoList.scss';

import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const deleteList = () => {
    setTodos('');
  };

  return (
    <div className="todo-wrapper">

      {/* TODO LIST */}
      <div className="todo-container">
        <ul className="todo-list">
          {todos !== '' && todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          })
          }
        </ul>
        <div className="list-functions">
          <p className="list-item-count">{todos.length} items left</p>
          <ul className="list-filters">
          <li>
          <button className="filter-btn filter-all">All</button>
          </li>
        <li>
          <button className="filter-btn filter-active">Active</button>
          </li>
        <li>
          <button className="filter-btn filter-completed">Completed</button>
          </li>
          </ul>
          <button className="clear-list-btn" onClick={deleteList}>Clear completed</button>
        </div>
      </div>

      {/* FILTER MENU FOR MOBILE */}
      <ul className="list-filters-mobile">
        <li>
          <button className="filter-btn filter-all">All</button>
          </li>
        <li>
          <button className="filter-btn filter-active">Active</button>
          </li>
        <li>
          <button className="filter-btn filter-completed">Completed</button>
          </li>
      </ul>
    </div>
  );
}

export default TodoList;