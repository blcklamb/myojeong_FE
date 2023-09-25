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
    else alert("유형은 0자 이상 6자 이하애오");
  };

  return (
    <>
      <StyledTop>
        <Paragraph>
          {`누구를 위한
          소원이애오?`}
        </Paragraph>
      </StyledTop>
      <StyledMiddle>
        <StyledBadgeGroup>
          <Badge badgeType={1} type="나" onClick={() => setType("나")} />
          <Badge badgeType={2} type="가족" onClick={() => setType("가족")} />
          <Badge badgeType={3} type="친구" onClick={() => setType("친구")} />
          <Badge badgeType={4} type="직접 입력" onClick={() => setType("")} />
        </StyledBadgeGroup>
        <Input
          value={type}
          height={6.4}
          placeholder="예시) 테일러"
          onChangeInput={onChangeType}
        />
        <Paragraph align="right">{`(을/를) 위한 소원이야.`}</Paragraph>
      </StyledMiddle>
      <StyledBottom>
        <NextSPButton onClick={onClickNextSPButton} />
      </StyledBottom>
    </>
  );
};

export default TypeTo;

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

const StyledBadgeGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
