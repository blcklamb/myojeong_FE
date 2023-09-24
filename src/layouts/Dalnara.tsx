import Wish from "components/dalnara/wishCard/Wish";
import React from "react";
import { styled } from "styled-components";

const Dalnara = () => {
  return (
    <StyledDalnara>
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
