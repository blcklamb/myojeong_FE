import Button from "components/story/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { COLORS } from "styles/color";

const Start = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledTop>
        <StyledH4>소원을 빌면 송편을 나눠줘요</StyledH4>
        <StyledH1>묘정 송편</StyledH1>
      </StyledTop>
      <StyledMiddle>
        <img
          className="floating-img"
          src="https://picsum.photos/120/120"
          alt="myojeong"
        />
      </StyledMiddle>
      <StyledBottom>
        <Button
          text="묘정 이야기 듣기"
          onClick={() => navigate("/story")}
          type="primary"
          color="BROWN"
        ></Button>
        <Button
          text="달나라 가기"
          onClick={() => navigate("/dalnara")}
          type="primary"
          color="DARK_BROWN"
        ></Button>
      </StyledBottom>
    </>
  );
};

export default Start;

const StyledTop = styled.div`
  margin-top: 11rem;
`;

const StyledH4 = styled.h4`
  color: ${COLORS.WHITE};
  font-size: 2rem;
`;

const StyledH1 = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 6.4rem;
`;

const StyledMiddle = styled.div`
  margin-top: 1.8rem;
`;

const StyledBottom = styled.div`
  margin-top: 11rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
