import styled from "styled-components";
import SongpyeonBtn from "./SongpyeonBtn";
import { COLORS } from "styles/color";
import Icon from "components/Icon";

export interface IWishList {
  id: number;
  from_name: string;
  content: string;
  sp1: number;
  sp2: number;
  sp3: number;
}

const Wish = ({ from_name, content, sp1, sp2, sp3, id }: IWishList) => {
  return (
    <>
      <StyledWish>
        <StyledHeader>
          <Icon name="share" width={24} height={24} />
        </StyledHeader>
        <StyledBody>
          <StyledWishContent>{content}</StyledWishContent>
          <StyledWisher>- {from_name}</StyledWisher>
        </StyledBody>
        <StyledFooter>
          <SongpyeonBtn songpyeonType="sp2" count={sp1} id={id} />
          <SongpyeonBtn songpyeonType="sp3" count={sp2} id={id} />
          <SongpyeonBtn songpyeonType="sp4" count={sp3} id={id} />
        </StyledFooter>
      </StyledWish>
    </>
  );
};

export default Wish;

const StyledWish = styled.div`
  width: 32rem;
  border-radius: 2.5rem 2.5rem 0 0;

  background-color: ${COLORS.WHITE};

  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  margin-top: 2rem;
  padding: 0 2.3rem;

  display: flex;
  justify-content: flex-end;
`;

const StyledBody = styled.div`
  padding: 0 2.3rem;
  font-size: 2.4rem;
`;

const StyledWishContent = styled.div`
  text-align: left;
`;

const StyledWisher = styled.h3`
  text-align: right;
  font-size: 2rem;
`;

const StyledFooter = styled.div`
  height: 5.1rem;
  padding: 0 0.5rem;
  background-color: ${COLORS.LIGHT_GREY};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
