import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  clearTodo,
  __getTodoThunk,
  __updateTodoThunk,
} from "./../redux/modules/todoSlice";
import Layout from "./../components/layout";
import styled from "styled-components";
import flex from "./../lib/flex";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditMode, setIsEditMode] = useState(false);

  const [updatedTodo, setUpdatedTodo] = useState("");

  const { todo } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(__getTodoThunk(id));
    return () => dispatch(clearTodo());
  }, [dispatch, id]);

  useEffect(() => {
    setUpdatedTodo(todo.comment);
  }, [todo]);

  const onSaveButtonHandler = () => {
    if (updatedTodo.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    }
    dispatch(
      __updateTodoThunk({
        ...todo,
        comment: updatedTodo,
      })
    );
    setIsEditMode(false);
  };
  return (
    <>
      <Layout
        bgColor="
    #fff"
      >
        {!isEditMode && (
          <StTodoHeader>
            <p size="24">id: ({id})</p>
            <p
              size="24"
              onClick={() => {
                navigate("/List");
              }}
            >
              이전으로
            </p>
          </StTodoHeader>
        )}

        <p size="32" fw="700">
          {todo?.title}
        </p>
        <StBody>
          {isEditMode ? (
            <>
              <Textarea
                name="body"
                rows="10"
                maxLength={200}
                value={updatedTodo}
                onChange={(event) => {
                  setUpdatedTodo(event.target.value);
                }}
              />
            </>
          ) : (
            <p size="18">{todo?.comment}</p>
          )}

          <StButtonGroup>
            {isEditMode ? (
              <button size="large" onClick={onSaveButtonHandler}>
                저장
              </button>
            ) : (
              <button
                size="large"
                onClick={() => {
                  setIsEditMode(true);
                }}
              >
                수정
              </button>
            )}
          </StButtonGroup>
        </StBody>
        {/* {!isEditMode && <Comments />} */}
      </Layout>
    </>
  );
};

export default Detail;

const StTodoHeader = styled.div`
  ${flex({
    jusify: "space-between",
  })}
  div:nth-child(2) {
    text-decoration: underline;
    color: teal;
    cursor: pointer;
  }
  margin-bottom: 32px;
`;

const StBody = styled.div`
  ${flex({
    direction: "column",
    jusify: "space-between",
  })}
  margin-top: 50px;
  min-height: 550px;
  div {
    line-height: 1.5;
  }
`;

const StButtonGroup = styled.div`
  width: 100%;
  ${flex({})}
  gap: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`;
