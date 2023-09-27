import Button from "components/story/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { COLORS } from "styles/color";
import FullMoon from "assets/start/FullMoon.png";
import BorderMoon from "assets/start/BorderMoon.png";
import Myojeong from "assets/myojeong.png";

const Start = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledTop>
        <StyledH4>소원을 빌면 송편을 나눠줘요</StyledH4>
        <StyledH1>묘정 송편</StyledH1>
      </StyledTop>
      <StyledMiddle>
        <div style={{ position: "relative", width: "100%", height: "24rem" }}>
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
            }}
            className="floating-img"
            src={Myojeong}
            alt="myojeong"
          />
          <img
            style={{
              display: "inline-block",
              position: "absolute",
              top: "50%",
              left: "50%",
              translate: "-50% -40%",
              zIndex: 2,
            }}
            className="floating-img"
            src={BorderMoon}
            alt="border-moon"
          />
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              translate: "-50% -40%",
              zIndex: 1,
            }}
            className="floating-img"
            src={FullMoon}
            alt="full-moon"
          />
        </div>
      </StyledMiddle>
      <StyledBottom>
        <Button
          text="묘정 이야기 듣기"
          onClick={() => navigate("/story")}
          type="primary"
          color="BROWN"
        ></Button>
        <Button
          text="달나라 가기"
          onClick={() => navigate("/dalnara")}
          type="primary"
          color="DARK_BROWN"
        ></Button>
      </StyledBottom>
    </>
  );
};

export default Start;

const StyledTop = styled.div`
  margin-top: 11rem;
`;

const StyledH4 = styled.h4`
  color: ${COLORS.WHITE};
  font-size: 2rem;
`;

const StyledH1 = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 6.4rem;
`;

const StyledMiddle = styled.div``;

const StyledBottom = styled.div`
  margin-top: 11rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
