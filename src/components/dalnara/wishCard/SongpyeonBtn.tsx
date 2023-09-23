import styled from "styled-components";

type songpyeonType = "love" | "money" | "luck";

const SongpyeonBtn = ({ songpyeonType }: { songpyeonType: songpyeonType }) => {
  return (
    <StyledSongpyeon>
      <StyledSongpyeonImg src={require(`../img/${songpyeonType}.png`)} />
      <StyledCount>999+</StyledCount>
    </StyledSongpyeon>
  );
};

export default SongpyeonBtn;

const StyledSongpyeon = styled.div`
  padding: 0px 5px;

  display: flex;
  align-items: center;
  gap: 5px;

  &:not(:last-child) {
    border-right: 1.5px solid black;
  }
`;

const StyledSongpyeonImg = styled.img`
  height: 33px;
  width: 36px;
`;

const StyledCount = styled.h3`
  font-size: 16px;
  margin-left: 5px;
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
