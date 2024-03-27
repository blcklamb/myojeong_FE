import Paragraph from "components/story/Paragraph";
import { useGETWish } from "hooks/api/story";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import centerSP from "assets/sp7 1.png";
import { COLORS } from "styles/color";
import Button from "components/story/Button";
import Icon from "components/Icon";
import { useEffect, useMemo, useRef } from "react";
import { toPng } from "html-to-image";
import CreditLink from "components/start/CreditLink";

const Songpyeon = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const { state } = useLocation();
  const rightAfterPost = useMemo(
    () => (state ? state.rightAfterPost : false),
    [state]
  );
  const hasPassword = useMemo(
    () => (state ? state.hasPassword : !!searchParams.get("pw")),
    [state]
  );

  const songpyeonPreviewRef = useRef<HTMLDivElement>(null);

  const { data, refetch, isError } = useGETWish({
    id: parseInt(searchParams.get("wishId") as string),
    password: hasPassword ? (searchParams.get("pw") as string) : undefined,
  });

  const onClickSongpyeonToPNG = async () => {
    if (songpyeonPreviewRef.current) {
      toPng(songpyeonPreviewRef.current).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${songpyeonOwner}의 소원 송편`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
      });
    }
  };

  const openShareBottomSheet = async () => {
    try {
      await navigator.share({
        files: [],
        text: `${toName}을/를 위한 송편이 도착했어요`,
        title: `묘정 송편`,
        url: `${location.href}`,
      });
    } catch (err) {
      alert("공유하기를 실패했어요. 다음에 다시 시도해주세요.");
    }
  };

  const copyUrlToClipboard = async () => {
    // http에서는 작동하지 않음
    try {
      await navigator.clipboard.writeText(location.href);
      alert("송편 링크가 복사되었어요.");
    } catch (err) {
      alert("송편 링크 복사를 실패했어요. 직접 복사해서 공유해주세요.");
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
  const isRightAfterPOST = useMemo(() => !!rightAfterPost, []);

  useEffect(() => {
    if (isError) {
      alert("비공개 소원이에요. 공유받은 링크로만 볼 수 있어요.");
      navigate("/");
    }
  }, [isError]);

  useEffect(() => {
    if (!hasPassword && data) {
      navigate(
        `/songpyeon?wishId=${parseInt(searchParams.get("wishId") as string)}`
      );
    } else {
      refetch();
    }
  }, [data]);

  return (
    <>
      <S_Top>
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
      </S_Top>
      <S_Preview ref={songpyeonPreviewRef}>
        <S_Songpyeon>
          <S_Emoji>{data?.emoji}</S_Emoji>
          <S_SPImage src={centerSP} alt="center-songpyeon" />
        </S_Songpyeon>
        <S_Middle>
          <S_P style={{ textAlign: "left" }}>{toName}에게</S_P>
          <S_P>{data?.content}</S_P>
          <S_P style={{ textAlign: "right" }}>{data?.from_name}의 소원</S_P>
        </S_Middle>
      </S_Preview>
      <S_Bottom>
        {hasPassword && isRightAfterPOST && (
          <S_SecretMessage>
            {`비공개 소원은 현재 링크로만 접근 가능해오.`}
            <br />
            {`꼭 소원을 저장하거나 링크를 복사해주새오.`}
          </S_SecretMessage>
        )}
        {isRightAfterPOST && (
          <S_BottomUpper>
            <Button
              color="LIGHT_BROWN"
              type="secondary"
              text="소원 저장하기"
              onClick={onClickSongpyeonToPNG}
            />
            <S_CircleButton onClick={openShareBottomSheet}>
              <Icon name="instagram" width={54} height={54} />
            </S_CircleButton>
            <S_CircleButton onClick={copyUrlToClipboard}>
              <Icon name="copy" width={54} height={54} />
            </S_CircleButton>
          </S_BottomUpper>
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
        <CreditLink hasGithubIcon />
      </S_Bottom>
    </>
  );
};

export default Songpyeon;

const S_Top = styled.div`
  margin-top: 5rem;
`;

const S_Songpyeon = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
  height: 5rem;

  position: relative;
`;

const S_SPImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 7rem;
  height: auto;
`;

const S_Emoji = styled.span`
  position: absolute;
  z-index: 2;
  font-size: 2.4rem;
`;

const S_Preview = styled.div`
  padding-bottom: 2.4rem;
`;

const S_Middle = styled.div`
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

const S_P = styled.p`
  font-size: 2.8rem;
  line-height: normal;
`;

const S_Bottom = styled.div`
  /* margin-top: 1rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const S_BottomUpper = styled.div`
  display: flex;
  align-items: center;
`;

const S_CircleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S_SecretMessage = styled.span`
  color: ${COLORS.GREY};
  font-size: 1.6rem;
`;
