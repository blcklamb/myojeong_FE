import Paragraph from "./Paragraph";
import TopButton from "./TopButton";
import { styled } from "styled-components";
import TiltMyojeong from "assets/tilt.gif";
import { S_BlurredMoon } from "./MakeWish";

interface IntroProps {
  onNext: () => void;
  onSkip: () => void;
}

const Intro = ({ onNext, onSkip }: IntroProps) => {
  return (
    <S_Wrapper>
      <S_Top>
        <TopButton text="이야기 넘어가기" onClick={onSkip} />
      </S_Top>
      <S_HiddenLayout onClick={() => onNext()} />
      <S_Middle>
        <img className="floating-img" src={TiltMyojeong} alt="myojeong" />
      </S_Middle>
      <S_Bottom>
        <Paragraph align="center">
          {`안녕하새오.
          저는 달나라에 사는 
          토끼 요정, 묘정이애오.`}
        </Paragraph>
      </S_Bottom>
      <S_BlurredMoon />
    </S_Wrapper>
  );
};

export default Intro;

const S_Wrapper = styled.div`
  position: relative;
`;

const S_Top = styled.div`
  display: flex;
  justify-content: end;
`;

export const S_HiddenLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const S_Middle = styled.div`
  margin-top: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S_Bottom = styled.div`
  margin-top: 18.9rem;
`;
