import Paragraph from "./Paragraph";
import NextSPButton from "./NextSPButton";
import Input from "./Input";
import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import Badge from "./Badge";
import { isValidName } from "utils/validation";

interface TypeToProps {
  onNext: (type: string) => void;
}

const TypeTo = ({ onNext }: TypeToProps) => {
  const [type, setType] = useState<string>("");

  const onChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setType(value);
  };

  const onClickNextSPButton = () => {
    if (isValidName(type)) onNext(type);
    // TODO: toast 처리
    else alert("유형은 1자 이상 6자 이하애오");
  };

  return (
    <>
      <S_Top>
        <Paragraph>
          {`누구를 위한
          소원이애오?`}
        </Paragraph>
      </S_Top>
      <S_Middle>
        <S_BadgeGroup>
          <Badge type="SELF" onClick={() => setType("나")} />
          <Badge type="FAMILY" onClick={() => setType("가족")} />
          <Badge type="FRIEND" onClick={() => setType("친구")} />
          <Badge type="CUSTOM" onClick={() => setType("")} />
        </S_BadgeGroup>
        <Input
          value={type}
          height={6.4}
          placeholder="ex) 연인"
          onChangeInput={onChangeType}
        />
        <Paragraph align="right">{`(을/를) 위한 소원이야.`}</Paragraph>
      </S_Middle>
      <S_Bottom>
        <NextSPButton onClick={onClickNextSPButton} />
      </S_Bottom>
    </>
  );
};

export default TypeTo;

const S_Top = styled.div``;

const S_Middle = styled.div`
  margin-top: 5.4rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
`;

const S_Bottom = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const S_BadgeGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
