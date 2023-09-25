import Dropdown from "components/dalnara/Dropdown";
import Wish from "components/dalnara/wishCard/Wish";
import Input from "components/story/Input";
import jsonData from "components/dalnara/data.json";
import { styled } from "styled-components";
import { useState } from "react";

const Dalnara = () => {
  const [inputValue, setInputValue] = useState("");
  const { wish_list } = jsonData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClick = (option: string) => {
    console.log(option);
  };

  return (
    <StyledDalnara>
      <StyledInputWrapper>
        <Input value={inputValue} height={4.8} placeholder="소원작성자 검색" onChangeInput={handleInputChange} />
        <Dropdown options={["최신", "좋아요"]} onSelect={onClick} />
      </StyledInputWrapper>
      {wish_list.map((wish) => (
        <Wish key={wish.id} from_name={wish.from_name} content={wish.content} sp1={100} sp2={1000} sp3={90} />
      ))}
      {wish_list.map((wish) => (
        <Wish key={wish.id} from_name={wish.from_name} content={wish.content} sp1={100} sp2={1000} sp3={90} />
      ))}
      {wish_list.map((wish) => (
        <Wish key={wish.id} from_name={wish.from_name} content={wish.content} sp1={100} sp2={1000} sp3={90} />
      ))}
      {wish_list.map((wish) => (
        <Wish key={wish.id} from_name={wish.from_name} content={wish.content} sp1={100} sp2={1000} sp3={90} />
      ))}
      {wish_list.map((wish) => (
        <Wish key={wish.id} from_name={wish.from_name} content={wish.content} sp1={100} sp2={1000} sp3={90} />
      ))}
    </StyledDalnara>
  );
};

export default Dalnara;

const StyledDalnara = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledInputWrapper = styled.div`
  width: 32rem;
  margin: 10rem 0 2.5rem 0;
  position: sticky;
  top: 0;
  background-color: rgba(9, 35, 46, 0.5);
  display: flex;
  gap: 1rem;
`;

const StyledInputWrapper = styled.div`
  margin: 25px 0px;
  width: 320px;
  display: flex;
  gap: 10px;
`;
