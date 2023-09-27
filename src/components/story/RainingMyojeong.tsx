import { useTrail, animated, useSprings, easings } from "@react-spring/web";
import { useSpring } from "react-spring";
import { styled } from "styled-components";
import nextSP from "assets/sp1 1.png";

const RainingMyojeong = () => {
  const [styles] = useSpring(() => ({
    loop: true,
    from: { y: -400 },
    to: { y: 100 },
    delay: 500,
    config: {
      easing: easings.easeInBack,
      velocity: 0.005,
      friction: 60,
      tension: 280,
    },
  }));
  // const springs = useSprings(2, {
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  // });

  return (
    <>
      <animated.div style={{ height: "5rem", ...styles }}>
        <div>
          <StyledSongpyeonImg src={nextSP} alt="next-songpyeon" />
        </div>
        <div>
          <StyledSongpyeonImg src={nextSP} alt="next-songpyeon" />
          <StyledSongpyeonImg src={nextSP} alt="next-songpyeon" />
        </div>
        <div>
          <StyledSongpyeonImg src={nextSP} alt="next-songpyeon" />

          <StyledSongpyeonImg src={nextSP} alt="next-songpyeon" />
          <StyledSongpyeonImg src={nextSP} alt="next-songpyeon" />
        </div>
      </animated.div>
      {/* {springs.map((props) => (
        <animated.div style={props}>Hello World</animated.div>
      ))} */}
    </>
  );
};

export default RainingMyojeong;
const StyledSongpyeonImg = styled.img`
  width: 3.1rem;
  height: auto;
`;
