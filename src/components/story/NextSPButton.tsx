import Span from "./Span";
import nextSP from "assets/sp1 1.png";
import { styled } from "styled-components";

interface NextSPButtonProps {
  onClick: () => void;
}

const NextSPButton = ({ onClick }: NextSPButtonProps) => {
  return (
    <S_Button onClick={onClick}>
      <Span>다음으로</Span>
      <S_SongpyeonImg src={nextSP} alt="next-songpyeon" />
    </S_Button>
  );
};

export default NextSPButton;

const S_Button = styled.button`
  gap: 0.8rem;
  background-color: transparent;

  display: flex;
  align-items: center;

  border: none;
`;

const S_SongpyeonImg = styled.img`
  width: 3.1rem;
  height: auto;
`;
