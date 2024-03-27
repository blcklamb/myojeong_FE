import React from "react";
import { styled } from "styled-components";
import { COLORS } from "styles/color";

type TAlign = "left" | "center" | "right";
interface ParagraphProps {
  children: React.ReactNode;
  align?: TAlign;
}
/**
 * 
 * @example
 * <Paragraph align="center">
    {`지구 사람들을 바라보니
    걱정이 너무 많은 것 같아오!`}
  </Paragraph>
 */
const Paragraph = ({ children, align = "left" }: ParagraphProps) => {
  return <S_P align={align}>{children}</S_P>;
};

export default Paragraph;

const S_P = styled.p<{ align: TAlign }>`
  color: ${COLORS.WHITE};
  white-space: pre-line;
  font-size: 3.6em;
  line-height: normal;

  text-align: ${(props) => props.align};
`;
