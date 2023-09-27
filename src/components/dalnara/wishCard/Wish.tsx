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
  const onCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(`myojeong.com/songpyeon?wishId=${id}`);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <StyledWish>
        <StyledHeader>
          <div onClick={onCopyClipBoard}>
            <Icon name="share" width={24} height={24} />
          </div>
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
  border-radius: 3rem 1rem 0 0;

  background-color: ${COLORS.WHITE};

  display: flex;
  flex-direction: column;

  &&::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    background-color: ${COLORS.BLACK};
    border-width: 0 0 3rem 4rem;
    border-style: solid;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 5.4rem 5.5rem,
      rgba(0, 0, 0, 0.12) 0px -1.2rem 3rem,
      rgba(0, 0, 0, 0.12) 0px 0.4rem 0.6rem,
      rgba(0, 0, 0, 0.17) 0px 1.2rem 1.3rem,
      rgba(0, 0, 0, 0.09) 0px -0.3rem 0.5rem;
    border-color: transparent transparent rgba(255, 255, 255, 0.9);
  }
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
