import { Todo } from "../models";

const TodoItem = ({ title, completed }: Todo) => {
  return (
    <>
      <li className="todo__item">
        <input type="checkbox" defaultChecked={completed} />
        <label>{title}</label>
        <button>x</button>
      </li>
    </>
  );
};

export default TodoItem;
