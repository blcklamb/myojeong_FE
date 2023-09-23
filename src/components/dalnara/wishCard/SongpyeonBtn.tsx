import styled from "styled-components";

import { ReactComponent as SongpyeonIcon } from "../img/pink_songpyeon.svg";

const SongpyeonBtn = () => {
  return (
    <StyledSongpyeon>
      <SongpyeonIcon />
      <StyledCount>999+</StyledCount>
    </StyledSongpyeon>
  );
};

export default SongpyeonBtn;

const StyledSongpyeon = styled.div`
  padding: 0px 5px;

  display: flex;
  align-items: center;
  gap: 5px;

  &:not(:last-child) {
    border-right: 1.5px solid black;
  }
`;

const StyledCount = styled.h3`
  margin-left: 5px;
  font-size: 16px;
`;
