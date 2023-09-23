import Paragraph from "./Paragraph";
import NextSPButton from "./NextSPButton";
import Input from "./Input";
import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import Badge from "./Badge";

const TypeTo = () => {
  const [name, setName] = useState<string>("");

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
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
        <Paragraph align="right">{`내 이름은`}</Paragraph>
        <StyledBadgeGroup>
          <Badge badgeType={1} name="나" onClick={() => console.log("나")} />
          <Badge
            badgeType={2}
            name="가족"
            onClick={() => console.log("가족")}
          />
          <Badge
            badgeType={3}
            name="친구"
            onClick={() => console.log("친구")}
          />
          <Badge
            badgeType={4}
            name="직접 입력"
            onClick={() => console.log("직접 입력")}
          />
        </StyledBadgeGroup>
        <Input
          value={name}
          height={6.4}
          placeholder="예시) 테일러"
          onChangeInput={onChangeName}
        />
        <Paragraph align="right">{`(을/를) 위한 소원이야.`}</Paragraph>
      </StyledMiddle>
      <StyledBottom>
        <NextSPButton onClick={() => console.log("clicked")} />
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
