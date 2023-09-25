import Paragraph from "./Paragraph";
import TopButton from "./TopButton";
import { styled } from "styled-components";

interface IntroProps {
  onNext: () => void;
  onSkip: () => void;
}

const Intro = ({ onNext, onSkip }: IntroProps) => {
  return (
    <StyledWrapper onClick={() => onNext()}>
      <StyledTop>
        <TopButton text="이야기 넘어가기" onClick={onSkip} />
      </StyledTop>
      <StyledMiddle>
        <img src="https://picsum.photos/120/120" alt="myojeong" />
      </StyledMiddle>
      <StyledBottom>
        <Paragraph align="center">
          {`안녕하새오.
          저는 달나라에 사는 
          토끼 요정, 묘정이애오.`}
        </Paragraph>
      </StyledBottom>
    </StyledWrapper>
  );
};

export default Intro;

const StyledWrapper = styled.div``;

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
`;
