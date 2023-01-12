import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/layout";

const Home = () => {
  const nagivate = useNavigate();
  return (
    <Layout>
      <StContainer>
        <StMain>
          <div size="32">무엇을 할까요?</div>
          <div
            title="할일 기록하기"
            onClick={() => {
              nagivate("/upload");
            }}
          >
            할일기록하기
          </div>

          <div
            title="TODO LIST"
            onClick={() => {
              nagivate("/List");
            }}
          >
            todoList
          </div>
        </StMain>
      </StContainer>
    </Layout>
  );
};

export default Home;

const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StMain = styled.div`
  margin-top: 24px;
  direction: "column";
  text-align: "start";
  gap: 24px;
`;
