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
    <S_CreditContainer>
      {hasGithubIcon && <Icon name="github" width={34} height={34} />}
      <S_A onClick={() => navigate("/credit")}>ⓒ Team 묘정송편</S_A>
    </S_CreditContainer>
  );
};

export default CreditLink;

const S_CreditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
`;

const S_A = styled.a`
  font-size: 2rem;
  color: ${COLORS.GREY};
  margin-top: 0.6rem;
`;
