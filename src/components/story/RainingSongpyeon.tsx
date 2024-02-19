import { animated } from "@react-spring/web";
import { styled } from "styled-components";
import nextSP from "assets/sp1 1.png";
import useReactSpring from "hooks/useReactSpring";

const RainingSongpyeon = () => {
  const { useRaining } = useReactSpring;
  const [styles] = useRaining();

  return (
    <>
      <animated.div style={{ height: "5rem", ...styles }}>
        <div>
          <S_SongpyeonImg src={nextSP} alt="next-songpyeon" />
        </div>
        <div>
          <S_SongpyeonImg src={nextSP} alt="next-songpyeon" />
          <S_SongpyeonImg src={nextSP} alt="next-songpyeon" />
        </div>
        <div>
          <S_SongpyeonImg src={nextSP} alt="next-songpyeon" />

          <S_SongpyeonImg src={nextSP} alt="next-songpyeon" />
          <S_SongpyeonImg src={nextSP} alt="next-songpyeon" />
        </div>
      </animated.div>
    </>
  );
};

export default RainingSongpyeon;
const S_SongpyeonImg = styled.img`
  width: 3.1rem;
  height: auto;
`;
