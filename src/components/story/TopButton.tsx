import Icon from "components/Icon";
import { styled } from "styled-components";
import { COLORS } from "styles/color";

interface TopButtonProps {
  text: string;
  onClick: () => void;
}

/**
 * 
 * @example
 * <TopButton
    text="이야기 넘어가기"
    onClick={() => console.log("click skipped")}
  />
 */
const TopButton = ({ text, onClick }: TopButtonProps) => {
  return (
    <>
      <S_Button onClick={onClick}>
        {text}
        <Icon name="forward" width={24} height={24} />
      </S_Button>
    </>
  );
};

export default TopButton;

const S_Button = styled.button`
  background-color: transparent;

  color: ${COLORS.BROWN};
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  width: 13.5rem;
  height: 2.8rem;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
