import { styled } from "styled-components";
import { COLORS } from "styles/color";

type TButton = "primary" | "secondary";
type TButtonColor = "LIGHT_BROWN" | "BROWN" | "DARK_BROWN";

interface ButtonProps {
  disabled?: boolean;
  text: string;
  type: TButton;
  color: TButtonColor;
  onClick: () => void;
}

const Button = ({ text, type, color, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      buttontype={type}
      buttoncolor={color}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

const ButtonColor = {
  border: {
    LIGHT_BROWN: COLORS.DARK_BROWN,
    BROWN: COLORS.DARK_BROWN,
    DARK_BROWN: COLORS.BROWN,
  },
};
const ButtonSize = {
  width: { primary: "28rem", secondary: "18rem" },
  height: { primary: "6.4rem", secondary: "5.6rem" },
};

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["buttontype"].includes(prop),
})<{ buttontype: TButton; buttoncolor: TButtonColor }>`
  width: ${(props) => ButtonSize.width[props.buttontype]};
  height: ${(props) => ButtonSize.height[props.buttontype]};

  font-size: 3.6rem;
  border-radius: 2rem;
  border: 0.3rem solid ${(props) => ButtonColor.border[props.buttoncolor]};
  background-color: ${(props) => `${COLORS[props.buttoncolor]}`};

  color: ${COLORS.WHITE};

  filter: drop-shadow(0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
  ${(props) =>
    props.disabled &&
    `
        background-color: #646464; 
        border: #767676;
        color: ${COLORS.GREY};
        cursor: not-allowed;
    `}
`;
