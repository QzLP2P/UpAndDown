import styled from "styled-components";
import {
  StyledCenterContainerColumn,
  StyledContainerBasic,
  StyledContainerColumn,
  StyledContainerRow,
} from "shared/styledComponents/container";
import { H6, H5 } from "shared/styledComponents/text";

export const Container = styled(StyledCenterContainerColumn)``;

export const StyledRow = styled(StyledContainerRow)`
  max-height: 128px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  padding-top: 5px;
`;

export const Title = styled(H5)`
  margin-bottom: 20px;
`;

export const StyledScoreContainer = styled(StyledContainerBasic)`
  height: 100%;
  max-width: 25%;
  @media (${(p) => p.theme.responsive.tablet}) {
    max-width: 35%;
  }
  @media (${(p) => p.theme.responsive.desktop}) {
    max-width: 50%;
  }
`;

export const StyledResultContainer = styled(StyledCenterContainerColumn)`
  justify-content: space-around;
  margin-left: 5px;
  margin-right: 5px;
  width: calc(100% - 10px);
  @media (${(p) => p.theme.responsive.tablet}) {
    margin-left: 30px;
    margin-right: 30px;
    width: calc(100% - 60px);
  }
  @media (${(p) => p.theme.responsive.desktop}) {
    margin-left: 60px;
    margin-right: 60px;
    width: calc(100% - 120px);
  }
`;

export const PlayerContainer = styled(StyledContainerColumn)``;

export const StyledSpan = styled(H6)`
  margin-left: 5%;

  @media (${(p) => p.theme.responsive.tablet}) {
    margin-left: 25%;
  }
  @media (${(p) => p.theme.responsive.desktop}) {
    margin-left: 25%;
  }
`;

export const StyledScoreSpan = styled(StyledSpan)`
  margin-left: 0%;

  @media (${(p) => p.theme.responsive.tablet}) {
    margin-left: 25%;
  }
  @media (${(p) => p.theme.responsive.desktop}) {
    margin-left: 50%;
  }
`;
