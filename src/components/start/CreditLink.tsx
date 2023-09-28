import Icon from "components/Icon";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { COLORS } from "styles/color";

interface CreditLinkProps {
  hasGithubIcon?: boolean;
}

const CreditLink = ({ hasGithubIcon }: CreditLinkProps) => {
  const navigate = useNavigate();
  return (
    <StyledCreditContainer>
      {hasGithubIcon && <Icon name="github" width={34} height={34} />}
      <StyledA onClick={() => navigate("/credit")}>ⓒ Team 묘정송편</StyledA>
    </StyledCreditContainer>
  );
};

export default CreditLink;

const StyledCreditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
`;

const StyledA = styled.a`
  font-size: 2rem;
  color: ${COLORS.GREY};
  margin-top: 0.6rem;
`;
