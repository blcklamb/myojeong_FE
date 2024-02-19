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
import CreditLink from "components/start/CreditLink";

type TDropDownOption = "recent" | "songpyeon";
const OPTION_MAP: { [key: string]: TDropDownOption } = {
  최신: "recent",
  좋아요: "songpyeon",
};

const Dalnara = () => {
  const [inputValue, setInputValue] = useState("");
  const [sortType, setSortType] = useState("recent");
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useGetInfiniteWishList({
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

  const onChangeSortType = (option: TDropDownOption) => {
    setSortType(option);
  };

  return (
    <S_Dalnara>
      <S_TopWrapper>
        <S_TopButtonWrapper>
          <CreditLink />

          <TopButton
            text="소원주문하러가기"
            onClick={() => navigate("/story")}
          />
        </S_TopButtonWrapper>
        <S_InputWrapper>
          <Input
            value={inputValue}
            height={4.8}
            placeholder="소원작성자 검색"
            onChangeInput={handleInputChange}
          />
          <Dropdown
            options={["최신", "좋아요"]}
            onSelect={(option) => {
              const payLoadOption = OPTION_MAP[option];
              onChangeSortType(payLoadOption);
            }}
          />
        </S_InputWrapper>
      </S_TopWrapper>

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
    </S_Dalnara>
  );
};

export default Dalnara;

const S_Dalnara = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  position: relative;
`;

const S_TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.BLACK};
  position: sticky;
  top: 0;
  z-index: 1;
`;

const S_TopButtonWrapper = styled.div`
  /* width: 32rem; */
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const S_InputWrapper = styled.div`
  margin: 3rem 0 2.5rem 0;
  width: 33rem;
  display: flex;
  gap: 1rem;
`;
