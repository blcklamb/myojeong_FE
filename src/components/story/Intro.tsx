import Paragraph from "./Paragraph";
import TopButton from "./TopButton";
import { styled } from "styled-components";
import TiltMyojeong from "assets/tilt.gif";
import { StyledBlurredMoon } from "./MakeWish";

interface IntroProps {
  onNext: () => void;
  onSkip: () => void;
}

const Intro = ({ onNext, onSkip }: IntroProps) => {
  return (
    <StyledWrapper>
      <StyledTop>
        <TopButton text="이야기 넘어가기" onClick={onSkip} />
      </StyledTop>
      <StyledHiddenLayout onClick={() => onNext()} />
      <StyledMiddle>
        <img className="floating-img" src={TiltMyojeong} alt="myojeong" />
      </StyledMiddle>
      <StyledBottom>
        <Paragraph align="center">
          {`안녕하새오.
          저는 달나라에 사는 
          토끼 요정, 묘정이애오.`}
        </Paragraph>
      </StyledBottom>
      <StyledBlurredMoon />
    </StyledWrapper>
  );
};

export default Intro;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: end;
`;

export const StyledHiddenLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
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
