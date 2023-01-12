import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./../components/Card";
import { __addTodos } from "./../redux/modules/todosSlice";

const List = () => {
  const { todos, error } = useSelector((state) => state.todos);
  console.log(todos);
  // const [addTodo, setAddTodo] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__addTodos());
  }, [dispatch]);

  if (todos.length === 0)
    return (
      <div>
        <p size="18">할일이 없네요!</p>
      </div>
    );
  if (error) return <div>알수 없는 에러가 발생했습니다.</div>;
  return (
    <>
      {todos?.map((todo) => (
        <Card todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default List;
