import Paragraph from "./Paragraph";
import NextSPButton from "./NextSPButton";
import Input from "./Input";
import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import { isValidName } from "utils/validation";

interface NameFromProps {
  onNext: (name: string) => void;
}

const NameFrom = ({ onNext }: NameFromProps) => {
  const [name, setName] = useState<string>("");

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  const onClickNextSPButton = () => {
    if (isValidName(name)) onNext(name);
    // TODO: toast 처리
    else alert("이름은 1자 이상 6자 이하애오");
  };

  return (
    <>
      <S_Top>
        <Paragraph>
          {`당신의
        이름이 뭐애오?`}
        </Paragraph>
      </S_Top>
      <S_Middle>
        <Paragraph align="right">{`내 이름은`}</Paragraph>
        <Input
          value={name}
          height={6.4}
          placeholder="예시) 테일러"
          onChangeInput={onChangeName}
        />
        <Paragraph align="right">{`(이)야`}</Paragraph>
      </S_Middle>
      <S_Bottom>
        <NextSPButton onClick={onClickNextSPButton} />
      </S_Bottom>
    </>
  );
};

export default NameFrom;

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
