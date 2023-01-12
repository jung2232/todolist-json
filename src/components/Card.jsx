import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteTodoThunk } from "../redux/modules/todosSlice";
const Card = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = (e) => {
    e.stopPropagation();
    if (window.confirm("이 할일을 지울까요?")) {
      dispatch(__deleteTodoThunk(todo.id));
    }
  };

  return (
    <div
      key={todo.id}
      onClick={() => {
        navigate(`/${todo.id}`);
      }}
    >
      <div>{todo.title}</div>
      <div>
        닉네임:{todo.name}
        {todo.comment}
      </div>

      <button onClick={(e) => onDeleteHandler(e)}>삭제</button>
    </div>
  );
};

export default Card;
