import { usePOSTLike } from "hooks/api/dalnara";
import styled from "styled-components";
import sp1 from "assets/sp1.png";
import sp2 from "assets/sp2.png";
import sp3 from "assets/sp3.png";

type TSongpyeon = "sp1" | "sp2" | "sp3";
type OBJSongpyeon = { [key in TSongpyeon]: string };

const IMAGE_MAP: OBJSongpyeon = {
  sp1,
  sp2,
  sp3,
};

interface ISongpyeonBtnProps {
  songpyeonType: TSongpyeon;
  count: number;
  id: number;
}

const SongpyeonBtn = ({ songpyeonType, count, id }: ISongpyeonBtnProps) => {
  const { mutate } = usePOSTLike();

  const vibrate = () => navigator.vibrate && navigator.vibrate(100);
  const onSpClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    vibrate();
    mutate({
      id,
      type: songpyeonType,
    });
  };
  const imageSrc = IMAGE_MAP[songpyeonType];
  return (
    <S_Songpyeon onClick={onSpClick}>
      <S_SongpyeonImg src={imageSrc} />
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
