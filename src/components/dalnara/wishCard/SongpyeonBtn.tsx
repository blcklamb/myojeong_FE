import { usePOSTLike } from "hooks/api/dalnara";
import styled from "styled-components";

const SongpyeonBtn = ({ songpyeonType, count, id }: { songpyeonType: string; count: number; id: number }) => {
  const { mutate } = usePOSTLike();

  const vibrate = () => navigator.vibrate && navigator.vibrate(100);
  const onSpClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    vibrate();
    const sptype = `sp${Number(songpyeonType.at(-1)) - 1}`;
    mutate({
      id,
      type: sptype,
    });
  };

  return (
    <StyledSongpyeon onClick={onSpClick}>
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
`;

const StyledSongpyeonImg = styled.img`
  height: 3.3rem;
  width: 3.6rem;
`;

const StyledCount = styled.h3`
  font-size: 1.6rem;
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
