import { ReactNode } from "react";
import { styled } from "styled-components";
import { COLORS } from "styles/color";

interface SpanProps {
  children: ReactNode;
}

/**
 *
 * @example
 * <Span>다음으로</Span>
 */
const Span = ({ children }: SpanProps) => {
  return <S_Span>{children}</S_Span>;
};

export default Span;

const S_Span = styled.span`
  color: ${COLORS.WHITE};
  font-size: 2.4rem;
`;
