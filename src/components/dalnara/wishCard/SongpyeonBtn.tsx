import styled from "styled-components";

const SongpyeonBtn = ({ songpyeonType, count }: { songpyeonType: string; count: number }) => {
  return (
    <StyledSongpyeon>
      <StyledSongpyeonImg src={require(`../../../assets/${songpyeonType}.png`)} />
      <StyledCount>{count}</StyledCount>
    </StyledSongpyeon>
  );
};

export default SongpyeonBtn;

const StyledSongpyeon = styled.div`
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:not(:last-child) {
    border-right: 0.15rem solid black;
  }
`;

const StyledSongpyeonImg = styled.img`
  height: 3.3rem;
  width: 3.6rem;
`;

const StyledCount = styled.h3`
  font-size: 16px;
  margin-left: 0.5rem;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
`;
