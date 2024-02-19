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
    <S_Songpyeon onClick={onSpClick}>
      <S_SongpyeonImg src={require(`../../../assets/${songpyeonType}.png`)} />
      <S_Count>{count}</S_Count>
    </S_Songpyeon>
  );
};

export default SongpyeonBtn;

const S_Songpyeon = styled.div`
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const S_SongpyeonImg = styled.img`
  height: 3.3rem;
  width: 3.6rem;
`;

const S_Count = styled.h3`
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
