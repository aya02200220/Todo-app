import { useSelector } from "react-redux";
import { TodoItems } from "../TodoItems/TodoItems";

export const TodoContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => <TodoItems key={todo.id} todo={todo} />)
        : "no todo"}
    </div>
  );
};
