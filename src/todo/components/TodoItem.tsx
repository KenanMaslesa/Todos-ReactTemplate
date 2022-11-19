import { Todo } from "../models";

const TodoItem = ({ id, title, completed }: Todo) => {
  return (
    <>
      <li className="todo__item" key={id}>
        <input type="checkbox" checked={completed} />
        <label>{title}</label>
        <button>x</button>
      </li>
    </>
  );
};

export default TodoItem;
