import Span from "./Span";
import nextSP from "assets/sp1 1.png";
import { styled } from "styled-components";

interface NextSPButtonProps {
  onClick: () => void;
}

const NextSPButton = ({ onClick }: NextSPButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <Span>다음으로</Span>
      <StyledSongpyeonImg src={nextSP} alt="next-songpyeon" />
    </StyledButton>
  );
};

export default NextSPButton;

const StyledButton = styled.button`
  gap: 0.8rem;
  background-color: transparent;

  display: flex;
  align-items: center;

  border: none;
`;

const StyledSongpyeonImg = styled.img`
  width: 3.1rem;
  height: auto;
`;
