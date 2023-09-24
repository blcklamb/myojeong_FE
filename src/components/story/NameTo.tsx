import Paragraph from "./Paragraph";
import NextSPButton from "./NextSPButton";
import Input from "./Input";
import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";

interface NameToProps {
  onNext: (name: string) => void;
  toType: string;
}

const NameTo = ({ onNext, toType }: NameToProps) => {
  const [name, setName] = useState<string>("");

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <>
      <StyledTop>
        <Paragraph>
          {`${toType}의
            이름이 뭐애오?`}
        </Paragraph>
      </StyledTop>
      <StyledMiddle>
        <Paragraph align="right">{`${toType} 이름은`}</Paragraph>
        <Input
          value={name}
          height={6.4}
          placeholder="예시) 쩡"
          onChangeInput={onChangeName}
        />
        <Paragraph align="right">{`(이)야`}</Paragraph>
      </StyledMiddle>
      <StyledBottom>
        <NextSPButton onClick={() => onNext(name)} />
      </StyledBottom>
    </>
  );
};

export default NameTo;

const StyledTop = styled.div`
  margin-top: 14.4rem;
`;

const StyledMiddle = styled.div`
  margin-top: 5.4rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
`;

const StyledBottom = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
