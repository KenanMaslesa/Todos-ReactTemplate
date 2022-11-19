import { Todo } from "../models";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, title: "Install Angular CLI", completed: true },
    { id: 1, title: "Style app", completed: false },
  ];
  
  return (
    <>
      <ul className="todo__list">
        {todos.map(({ id, title, completed }: Todo) => (
          <TodoItem id={id} title={title} completed={completed} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
