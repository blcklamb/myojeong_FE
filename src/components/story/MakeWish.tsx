import { ChangeEvent, useMemo, useState } from "react";
import { styled } from "styled-components";
import Paragraph from "./Paragraph";
import Span from "./Span";
import Button from "./Button";
import { animated } from "react-spring";
import Myojeong from "assets/myojeong.png";
import { isValidWish } from "utils/validation";
import useReactSpring from "hooks/useReactSpring";

interface MakeWishProps {
  onNext: (content: string, isOpen: boolean) => void;
  fromName: string;
  toName: string;
}

const LIMIT_MSG = "🚫 소원은 150자까지만 가능해오.";

const MakeWish = ({ onNext, fromName, toName }: MakeWishProps) => {
  const [wishContent, setWishContent] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const hasWishContent = useMemo(() => wishContent.length > 0, [wishContent]);
  const over150Char = useMemo(() => wishContent.length > 150, [wishContent]);

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setWishContent(value);
  };

  const onToggleOpenCheckbox = () => setIsOpen((prev) => !prev);

  const onClickMakeWishButton = () => {
    if (isValidWish(wishContent)) onNext(wishContent, isOpen);
    else alert("소원은 150자 이하애오");
  };

  const { useMovingHorizontal } = useReactSpring;
  const [styles] = useMovingHorizontal();

  return (
    <>
      <S_Top>
        <Paragraph>
          {`${fromName}의
        소원을 알려주새오.`}
        </Paragraph>
      </S_Top>
      <S_Middle>
        <S_TextAreaWrapper>
          <S_ToName>{toName.length > 0 ? toName : "나"}에게</S_ToName>
          <S_TextArea
            placeholder="예시) 우산 깜박하고 안 챙긴 날에 비 안 오게 해주세요!"
            value={wishContent}
            onChange={onChangeTextArea}
          />
        </S_TextAreaWrapper>
        <S_IsOpenContainer>
          <Span>모든 사람이 봐도 괜찮을까오?</Span>
          <S_Checkbox
            aria-label="is-open"
            type="checkbox"
            checked={isOpen}
            onChange={onToggleOpenCheckbox}
          />
        </S_IsOpenContainer>
        {over150Char && <Span>{LIMIT_MSG}</Span>}
      </S_Middle>
      <S_Bottom>
        <animated.div style={{ ...styles }}>
          <img src={Myojeong} alt="myojeong" style={{ height: "10rem" }} />
        </animated.div>
        <Button
          disabled={!hasWishContent}
          text="소원 주문하기"
          type="primary"
          color="BROWN"
          onClick={onClickMakeWishButton}
        />
      </S_Bottom>
      <S_BlurredMoon />
    </>
  );
};

export default MakeWish;

const S_Top = styled.div``;

const S_Middle = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
`;

const S_TextAreaWrapper = styled.div`
  width: 100%;
  height: 21.8rem;

  border-radius: 3rem;
  background: rgba(217, 217, 217, 0.7);

  padding: 1.2rem 3.2rem 1.2rem;
`;

const S_ToName = styled.h2`
  font-size: 2.8rem;
  text-align: left;
`;

const S_TextArea = styled.textarea`
  width: 100%;
  height: 11.2rem;
  background-color: transparent;

  font-size: 2rem;
  border: none;
`;

const S_IsOpenContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1.2rem;
`;

const S_Checkbox = styled.input`
  width: 2.4rem;
  height: 2.4rem;

  border-radius: 0.5rem;
`;

const S_Bottom = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const S_BlurredMoon = styled.span`
  height: 16.5rem;
  width: 16.5rem;

  background-color: #ffcd5f;
  border-radius: 50%;
  display: inline-block;
  filter: blur(6rem);

  position: absolute;
  top: 25rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;
