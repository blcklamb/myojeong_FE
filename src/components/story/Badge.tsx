import styled from "styled-components";

type TBadge = 1 | 2 | 3 | 4;
interface BadgeProps {
  badgeType: TBadge;
  type: string;
  onClick: () => void;
}

const Badge = ({ badgeType, type, onClick }: BadgeProps) => {
  return (
    <StyledBadge badgetype={badgeType} onClick={onClick}>
      <StyledDot badgetype={badgeType} />
      {type}
    </StyledBadge>
  );
};

export default Badge;

const BadgeColor = {
  background: { 1: "#F9F5FF", 2: "#FEF3F2", 3: "#FFFAEB", 4: "#ECFDF3" },
  span: { 1: "#9E77ED", 2: "#F04438", 3: "#F79009", 4: "#12B76A" },
  font: { 1: "#6941C6", 2: "#B42318", 3: "#B54708", 4: "#027A48" },
};

const StyledBadge = styled.button.withConfig({
  shouldForwardProp: (prop) => !["badgetype"].includes(prop),
})<{ badgetype: TBadge }>`
  display: inline-flex;
  align-items: center;

  font-size: 2rem;
  font-weight: 500;
  gap: 0.6rem;
  height: 2.8rem;
  padding: 1rem;

  border: none;
  border-radius: 3rem;

  background-color: ${(props) => BadgeColor.background[props.badgetype]};
  color: ${(props) => BadgeColor.font[props.badgetype]};
`;

const StyledDot = styled.div.withConfig({
  shouldForwardProp: (prop) => !["badgetype"].includes(prop),
})<{ badgetype: TBadge }>`
  background-color: ${(props) => BadgeColor.span[props.badgetype]};

  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  display: inline-block;
`;
