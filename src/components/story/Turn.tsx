import { styled } from "styled-components";
import TopButton from "./TopButton";
import Paragraph from "./Paragraph";
import RainingSongpyeon from "./RainingSongpyeon";
import { S_HiddenLayout } from "./Intro";

interface TurnProps {
  onNext: () => void;
  onSkip: () => void;
}

const Turn = ({ onNext, onSkip }: TurnProps) => {
  return (
    <S_Wrapper>
      <S_Top>
        <TopButton text="이야기 넘어가기" onClick={onSkip} />
      </S_Top>
      <S_HiddenLayout onClick={() => onNext()} />
      <S_Middle>
        <RainingSongpyeon />
      </S_Middle>
      <S_Bottom>
        <Paragraph align="center">
          {`지구 사람들을 바라보니
            걱정이 너무 많은 것 같아오!`}
        </Paragraph>
        <Paragraph align="center">
          {`그래서 소원을 주문받아서
            송편을 나눠 줄 거애오.`}
        </Paragraph>
      </S_Bottom>
    </S_Wrapper>
  );
};

export default Turn;

const S_Wrapper = styled.div`
  position: relative;
`;

const S_Top = styled.div`
  display: flex;
  justify-content: end;
`;

const S_Middle = styled.div`
  margin-top: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S_Bottom = styled.div`
  margin-top: 18.9rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
