import Icon from "components/Icon";
import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "styles/color";

interface DropdownProps {
  options: string[]; // 드롭다운 옵션들의 배열
  onSelect: (selectedOption: string) => void; // 옵션 선택 시 호출할 콜백 함수
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <S_DropdownContainer>
      <S_DropdownButton onClick={toggleDropdown}>
        <S_Span>
          {selectedOption || (
            <>
              <S_NaviWrapper>
                <Icon name="navigation" height={20} width={20} />
                정렬
              </S_NaviWrapper>
            </>
          )}
        </S_Span>
      </S_DropdownButton>
      {isOpen && (
        <S_DropdownList>
          {options.map((option, index) => (
            <S_DropdownListItem
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </S_DropdownListItem>
          ))}
        </S_DropdownList>
      )}
    </S_DropdownContainer>
  );
};

export default Dropdown;

const S_DropdownContainer = styled.div`
  width: 13rem;
  height: 4.8rem;
  position: relative;
  display: inline-block;
`;

const S_DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  border: 0.3rem solid ${COLORS.GREEN};
  border-radius: 2.5rem;
  font-size: 2.4rem;
  background-color: ${COLORS.WHITE};
  cursor: pointer;
`;

const S_DropdownList = styled.ul`
  width: 100%;
  margin-top: 0.5rem;
  border: 0.3rem solid ${COLORS.GREEN};
  border-radius: 2rem;
  background-color: ${COLORS.WHITE};
  font-size: 2.4rem;
  position: absolute;
  overflow: hidden;
`;

const S_DropdownListItem = styled.li`
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.LIGHT_GREY};
  }

  &:not(:last-child) {
    border-bottom: 0.2rem solid ${COLORS.GREEN};
  }
`;

const S_NaviWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const S_Span = styled.span`
  color: black;
`;
