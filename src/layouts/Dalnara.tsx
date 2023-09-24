import Dropdown from "components/dalnara/Dropdown";
import Wish from "components/dalnara/wishCard/Wish";
import Input from "components/story/Input";
import React from "react";
import { styled } from "styled-components";

const Dalnara = () => {
  const onClick = () => {
    console.log("dd");
  };
  return (
    <StyledDalnara>
      <StyledInputWrapper>
        <Input value="" height={4.8} placeholder="소원작성자 검색" onChangeInput={onClick} />
        <Dropdown options={["최신", "좋아요"]} onSelect={onClick} />
      </StyledInputWrapper>
      <Wish />
      <Wish />
      <Wish />
      <Wish />
      <Wish />
      <Wish />
    </StyledDalnara>
  );
};

export default Dalnara;

const StyledDalnara = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledInputWrapper = styled.div`
  margin: 25px 0px;
  width: 320px;
  display: flex;
  gap: 10px;
`;
