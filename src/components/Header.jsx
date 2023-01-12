import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { FaHome } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StContainer>
      <div
        size="24"
        onClick={() => {
          navigate("/");
        }}
      >
        홈
      </div>
      <StTitle>나만의 투두리스트</StTitle>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 45px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
`;

const StTitle = styled.div`
  font-size: 24px;
`;
