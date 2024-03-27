import styled from "styled-components";

type TBadge = "SELF" | "FAMILY" | "FRIEND" | "CUSTOM";
type OBJBadge = {
  [key in TBadge]: string;
};

const BADGE_TYPE: OBJBadge = {
  SELF: "나",
  FAMILY: "가족",
  FRIEND: "친구",
  CUSTOM: "직접 입력",
};

interface BadgeProps {
  type: TBadge;
  onClick: () => void;
}

const Badge = ({ type, onClick }: BadgeProps) => {
  return (
    <S_Badge badgetype={type} onClick={onClick}>
      <S_Dot badgetype={type} />
      {BADGE_TYPE[type]}
    </S_Badge>
  );
};

export default Badge;

const BadgeColor = {
  background: {
    SELF: "#F9F5FF",
    FAMILY: "#FEF3F2",
    FRIEND: "#FFFAEB",
    CUSTOM: "#ECFDF3",
  },
  span: {
    SELF: "#9E77ED",
    FAMILY: "#F04438",
    FRIEND: "#F79009",
    CUSTOM: "#12B76A",
  },
  font: {
    SELF: "#6941C6",
    FAMILY: "#B42318",
    FRIEND: "#B54708",
    CUSTOM: "#027A48",
  },
};

const S_Badge = styled.button.withConfig({
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

const S_Dot = styled.div.withConfig({
  shouldForwardProp: (prop) => !["badgetype"].includes(prop),
})<{ badgetype: TBadge }>`
  background-color: ${(props) => BadgeColor.span[props.badgetype]};

  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  display: inline-block;
`;
