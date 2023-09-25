import styled from "styled-components";
import SongpyeonBtn from "./SongpyeonBtn";
import { COLORS } from "styles/color";
import Icon from "components/Icon";

const Wish = () => {
  return (
    <>
      <StyledWish>
        <StyledHeader>
          <Icon name="share" width={24} height={24} />
        </StyledHeader>
        <StyledBody>
          <StyledWishContent>잠재력이 아니라 잠과 재력을 각각 따로 주세요!</StyledWishContent>
          <StyledWisher>- 테일러</StyledWisher>
        </StyledBody>
        <StyledFooter>
          <SongpyeonBtn songpyeonType="sp10" />
          <SongpyeonBtn songpyeonType="sp11" />
          <SongpyeonBtn songpyeonType="sp13" />
        </StyledFooter>
      </StyledWish>
    </>
  );
};

export default Wish;

const StyledWish = styled.div`
  width: 320px;
  border-radius: 25px 25px 0px 0px;

  background-color: ${COLORS.WHITE};

  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  margin-top: 20px;
  padding: 0px 23px;

  display: flex;
  justify-content: flex-end;
`;

const StyledBody = styled.div`
  padding: 0px 23px;
  font-size: 24px;
`;

const StyledWishContent = styled.div`
  text-align: left;
`;

const StyledWisher = styled.h3`
  text-align: right;
  font-size: 20px;
`;

const StyledFooter = styled.div`
  height: 51px;
  padding: 0px 5px;
  background-color: ${COLORS.LIGHT_GREY};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
