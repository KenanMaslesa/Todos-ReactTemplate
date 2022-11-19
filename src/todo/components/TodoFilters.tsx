const TodoFilters = () => {
  return (
    <div className="todo__filters">
      <span>2 items left</span>
      <ul>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      <button>Clear completed</button>
    </div>
  );
};

export default TodoFilters;
