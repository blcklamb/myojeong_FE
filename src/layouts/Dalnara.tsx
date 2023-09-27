import Dropdown from "components/dalnara/Dropdown";
import Wish from "components/dalnara/wishCard/Wish";
import Input from "components/story/Input";
import { styled } from "styled-components";
import { useState } from "react";
import TopButton from "components/story/TopButton";
import { useGetInfiniteWishList, wishListItem } from "hooks/api/dalnara";
import useIntersection from "hooks/useIntersection";
import { useNavigate } from "react-router-dom";
import { COLORS } from "styles/color";

const Dalnara = () => {
  const [inputValue, setInputValue] = useState("");
  const [sortType, setSortType] = useState("recent");
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isFetching, refetch } = useGetInfiniteWishList({
    sorted: sortType,
    keyword: inputValue,
  });

  const ref = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) fetchNextPage();
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setTimeout(() => {
      refetch();
    }, 100);
  };

  const onChangeSortType = (option: string) => {
    setSortType(option === "최신" ? "recent" : "songpyeon");
  };

  return (
    <StyledDalnara>
      <StyledTopWrapper>
        <StyledTopButtonWrapper>
          <TopButton text="소원주문하러가기" onClick={() => navigate("/story")} />
        </StyledTopButtonWrapper>
        <StyledInputWrapper>
          <Input value={inputValue} height={4.8} placeholder="소원작성자 검색" onChangeInput={handleInputChange} />
          <Dropdown options={["최신", "좋아요"]} onSelect={onChangeSortType} />
        </StyledInputWrapper>
      </StyledTopWrapper>

      {data?.pages.map((wishList) =>
        wishList.data.wish_list.map((wish: wishListItem) => (
          <Wish
            key={wish.id}
            from_name={wish.from_name}
            content={wish.content}
            sp1={wish.sp1}
            sp2={wish.sp2}
            sp3={wish.sp3}
            id={wish.id}
          />
        ))
      )}
      <div ref={ref} />
    </StyledDalnara>
  );
};

export default Dalnara;

const StyledDalnara = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const StyledTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.BLACK};
  position: sticky;
  top: 0;
`;

const StyledTopButtonWrapper = styled.div`
  width: 32rem;
  margin-top: 3rem;
  display: flex;
  justify-content: end;
`;

const StyledInputWrapper = styled.div`
  margin: 3rem 0 2.5rem 0;
  width: 33rem;
  display: flex;
  gap: 1rem;
`;
