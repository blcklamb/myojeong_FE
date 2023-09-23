import React from "react";
import { styled } from "styled-components";
import { COLORS } from "styles/color";

interface ParagraphPrpos {
  children: React.ReactNode;
}
const Paragraph = ({ children }: ParagraphPrpos) => {
  return <StyledP>{children}</StyledP>;
};

export default Paragraph;

const StyledP = styled.p`
  color: ${COLORS.WHITE};
  white-space: pre-line;
  font-size: 3.6em;
`;
