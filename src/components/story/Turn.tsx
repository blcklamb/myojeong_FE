import { styled } from "styled-components";
import TopButton from "./TopButton";
import Paragraph from "./Paragraph";

const Turn = () => {
  return (
    <>
      <StyledTop>
        <TopButton
          text="이야기 넘어가기"
          onClick={() => console.log("click skipped")}
        />
      </StyledTop>
      <StyledMiddle>
        <img src="https://picsum.photos/120/120" alt="songpyeon" />
      </StyledMiddle>
      <StyledBottom>
        <Paragraph align="center">
          {`지구 사람들을 바라보니
            걱정이 너무 많은 것 같아오!`}
        </Paragraph>
        <Paragraph align="center">
          {`그래서 소원을 주문받아서
            송편을 나눠 줄 거애오.`}
        </Paragraph>
      </StyledBottom>
    </>
  );
};

export default Turn;

const StyledTop = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 6.4rem;
`;

const StyledMiddle = styled.div`
  margin-top: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBottom = styled.div`
  margin-top: 18.9rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
