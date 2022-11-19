const TodoFilters = () => {
  return (
    <div className="todo__filters">
      <span>1 item left</span>
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
