import styled from "styled-components";
import SP12 from "assets/credit/sp12.png";
import SP13 from "assets/credit/sp13.png";
import Jeong from "assets/credit/jeong.png";
import Taylor from "assets/credit/taylor.png";
import Nimgnas from "assets/credit/nimgnas.png";
import { COLORS } from "styles/color";
import Icon from "components/Icon";
import Button from "components/story/Button";
import { useNavigate } from "react-router-dom";
import { animated } from "react-spring";
import useReactSpring from "hooks/useReactSpring";

const Credit = () => {
  const TEAM_DATA = [
    {
      imgSrc: Jeong,
      alt: "jeong",
      name: "쩡",
      githubLink: "https://github.com/blcklamb",
    },
    {
      imgSrc: Taylor,
      alt: "taylor",
      name: "테일러",
      githubLink: "https://github.com/zeonga1102",
    },
    {
      imgSrc: Nimgnas,
      alt: "nimgnas",
      name: "상민",
      githubLink: "https://github.com/nimgnas",
    },
  ];

  const navigate = useNavigate();

  const { useShaking } = useReactSpring;
  const [styles] = useShaking();

  return (
    <>
      <S_Top>
        <img src={SP12} alt="right-songpyeon" />
        <S_H1>Credit</S_H1>
        <img src={SP13} alt="right-songpyeon" />
      </S_Top>
      <S_Middle>
        <S_CrewWrapper>
          {TEAM_DATA.map((ele) => {
            const { githubLink, imgSrc, alt, name } = ele;
            return (
              <S_Crew
                key={ele.alt}
                onClick={() => window.open(githubLink, "_newtab")}
              >
                <animated.div style={{ ...styles }}>
                  <img src={imgSrc} alt={alt} />
                </animated.div>
                <S_Name>{name}</S_Name>
              </S_Crew>
            );
          })}
        </S_CrewWrapper>
        <S_GithubWrapper>
          <S_Github
            onClick={() =>
              window.open("https://github.com/blcklamb/myojeong_fe", "_newtab")
            }
          >
            <Icon name="github" width={34} height={34} />
            <S_Name>프론트엔드 레포지토리</S_Name>
          </S_Github>
          <S_Github
            onClick={() =>
              window.open(
                "https://github.com/zeonga1102/myojeong_BE",
                "_newtab"
              )
            }
          >
            <Icon name="github" width={34} height={34} />
            <S_Name>백엔드 레포지토리</S_Name>
          </S_Github>
        </S_GithubWrapper>
      </S_Middle>
      <S_Bottom>
        <Button
          text="처음으로 가기"
          color="LIGHT_BROWN"
          type="primary"
          onClick={() => navigate("/")}
        />
      </S_Bottom>
    </>
  );
};

export default Credit;

const S_Top = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.6rem;

  margin-top: 13rem;
`;

const S_H1 = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 3.6rem;
`;

const S_Middle = styled.div`
  margin-top: 11rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const S_CrewWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.2rem;
`;
const S_Crew = styled.div``;
const S_Name = styled.div`
  color: ${COLORS.WHITE};
  font-size: 2.8rem;
`;
const S_GithubWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

const S_Github = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
`;

const S_Bottom = styled.div`
  margin-top: 8rem;
`;
