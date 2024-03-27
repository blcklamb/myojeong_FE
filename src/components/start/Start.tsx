import Button from "components/story/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { COLORS } from "styles/color";
import FullMoon from "assets/start/FullMoon.png";
import BorderMoon from "assets/start/BorderMoon.png";
import Myojeong from "assets/myojeong.png";
import { useGETWishCount } from "hooks/api/start";
import Span from "components/story/Span";
import CreditLink from "./CreditLink";

const Start = () => {
  const navigate = useNavigate();
  const { data: wishCount } = useGETWishCount();

  return (
    <>
      <S_Top>
        <S_H4>소원을 빌면 송편을 나눠줘요</S_H4>
        <S_H1>묘정 송편</S_H1>
      </S_Top>
      <S_Middle>
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
      </S_Middle>
      <S_Bottom>
        <Span>현재 {wishCount}개의 소원이 모였어요!</Span>
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
        <CreditLink />
      </S_Bottom>
    </>
  );
};

export default Start;

const S_Top = styled.div`
  margin-top: 4rem;
`;

const S_H4 = styled.h4`
  color: ${COLORS.WHITE};
  font-size: 2rem;
`;

const S_H1 = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 6.4rem;
`;

const S_Middle = styled.div``;

const S_Bottom = styled.div`
  margin-top: 11rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
