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
  return <StyledSpan>{children}</StyledSpan>;
};

export default Span;

const StyledSpan = styled.span`
  color: ${COLORS.WHITE};
  font-size: 2.4rem;
`;
