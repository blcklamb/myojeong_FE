import React from "react";
import styled from "styled-components";
import { COLORS } from "styles/color";
interface InputProps {
  height: number;
  placeholder: string;
  value: string;
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
}
/**
 *
 * @example
 * <Input
     value={name}
     height={6.4}
     placeholder="예시) 테일러"
     onChangeInput={onChangeName}
   />
 */
const Input = ({ height, value, placeholder, onChangeInput }: InputProps) => {
  return (
    <S_Input
      height={height}
      value={value}
      placeholder={placeholder}
      onChange={onChangeInput}
    />
  );
};

export default Input;

const S_Input = styled.input<{ height: number }>`
  width: 100%;
  background-color: ${COLORS.WHITE};

  height: ${(props) => `${props.height}rem`};
  font-size: 3.2rem;

  border-radius: 2.5rem;
  border: 0.3rem solid ${COLORS.GREEN};

  padding: 1.8rem;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;
