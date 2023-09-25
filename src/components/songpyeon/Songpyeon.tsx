import Paragraph from "components/story/Paragraph";
import { useGETWish } from "hooks/api/story";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import centerSP from "assets/sp7 1.png";
import { COLORS } from "styles/color";
import Button from "components/story/Button";
import Icon from "components/Icon";
import { useMemo } from "react";

const Songpyeon = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const { data } = useGETWish({
    id: parseInt(searchParams.get("wishId") as string),
  });

  // MOCK DATA
  // const data = {
  //   id: searchParams.get("wishId") as string,
  //   from_name: "테일러",
  //   to_name: "쩡",
  //   content:
  //     "헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 웅냥냥냥",
  //   emoji: "🪄",
  //   is_myself: true,
  // };

  const copyUrlToClipboard = async () => {
    // http에서는 작동하지 않음
    try {
      await navigator.clipboard.writeText(location.href);
      console.log("Page URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const toName = useMemo(
    () => (data ? (data.is_myself ? "나" : data.to_name) : "송편주인"),
    [data]
  );
  const songpyeonOwner = useMemo(
    () =>
      data ? (data.is_myself ? data.from_name : data.to_name) : "송편주인",
    [data]
  );
  const isRightAfterPOST = true;

  return (
    <div>
      <StyledTop>
        {isRightAfterPOST && (
          <Paragraph>
            {`주문이 끝났어요.
              여기 송편 받으새오!`}
          </Paragraph>
        )}
        {!isRightAfterPOST && (
          <Paragraph>
            {`송편을 구경하러 왔군요.
              여기 ${songpyeonOwner}의 송편이애오.`}
          </Paragraph>
        )}
        <StyledSongpyeon>
          <StyledEmoji>{data?.emoji}</StyledEmoji>
          <StyledSPImage src={centerSP} alt="center-songpyeon"></StyledSPImage>
        </StyledSongpyeon>
      </StyledTop>
      <StyledMiddle>
        <StyledP style={{ textAlign: "left" }}>{toName}에게</StyledP>
        <StyledP>{data?.content}</StyledP>
        <StyledP style={{ textAlign: "right" }}>
          {data?.from_name}의 소원
        </StyledP>
      </StyledMiddle>
      <StyledBottom>
        {isRightAfterPOST && (
          <StyledBottomUpper>
            <Button
              color="LIGHT_BROWN"
              type="secondary"
              text="소원 저장하기"
              onClick={() => console.log("clicked save")}
            />
            <StyledCircleButton onClick={() => console.log("instagram click")}>
              <Icon name="instagram" width={54} height={54} />
            </StyledCircleButton>
            <StyledCircleButton onClick={copyUrlToClipboard}>
              <Icon name="copy" width={54} height={54} />
            </StyledCircleButton>
          </StyledBottomUpper>
        )}
        {!isRightAfterPOST && (
          <Button
            color="LIGHT_BROWN"
            type="primary"
            text="소원 빌러가기"
            onClick={() => navigate("/story")}
          />
        )}
        <Button
          color="DARK_BROWN"
          type="primary"
          text="달나라 가기"
          onClick={() => navigate("/dalnara")}
        />
      </StyledBottom>
    </div>
  );
};

export default Songpyeon;

const StyledTop = styled.div`
  margin-top: 7.8rem;
`;

const StyledSongpyeon = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
`;

const StyledSPImage = styled.img`
  width: 7rem;
  height: auto;
`;

const StyledEmoji = styled.span`
  position: absolute;
  font-size: 2.4rem;
`;

const StyledMiddle = styled.div`
  border-radius: 3.9rem;
  border: 0.7rem dashed #ef9e9b;
  background: ${COLORS.WHITE};

  width: 32rem;
  height: 30rem;

  margin: auto;
  margin-top: 2rem;
  padding: 1rem 3rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledP = styled.p`
  font-size: 2.8rem;
  line-height: normal;
`;

const StyledBottom = styled.div`
  margin-top: 3.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const StyledBottomUpper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCircleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
