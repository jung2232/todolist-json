import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import List from "./../pages/List";
const From = () => {
  const [addTodo, setAddTodo] = useState(null);

  const [todos, setTodos] = useState({
    name: "",
    title: "",
    comment: "",
  });

  const { isLoading, error } = useSelector((state) => state.todos);

  const onSubmitHandler = async (todo) => {
    await axios.post("http://localhost:3001/todos", todo);
  };

  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  //에러
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          e.preventDefault();
          if (
            (todos.name.trim() === "" ||
              todos.title.trim() === "" ||
              todos.comment.trim() === "",
            alert("등록 되었습니다."))
          ) {
            return alert("모든 항목을 입력해주세요.");
          }
          setTodos({ name: "", title: "", comment: "" });
          onSubmitHandler(todos);
        }}
      >
        <div>
          <p>작성자</p>
        </div>
        <input
          type="text"
          value={todos.name}
          onChange={(ev) => {
            const { value } = ev.target;
            setTodos({ ...todos, name: value });
          }}
        />
        <div>
          <p>제목</p>
        </div>
        <input
          type="text"
          value={todos.title}
          onChange={(ev) => {
            const { value } = ev.target;
            setTodos({ ...todos, title: value });
          }}
        />
        <div>
          <p>내용</p>
        </div>
        <textarea
          name="body"
          rows="10"
          value={todos.comment}
          maxLength={200}
          onChange={(ev) => {
            const { value } = ev.target;
            setTodos({ ...todos, comment: value });
          }}
          placeholder="내용을 입력해주세요. (200자 이내)"
        />
        <button>추가하기</button>
      </form>
    </>
  );
};

export default From;
