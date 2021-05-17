import styled from "styled-components";
import { Header_Height } from "shared/constants";
import {
  StyledContainerBasic,
  StyledCenterContainerColumn,
  StyledRowMargin,
} from "shared/styledComponents/container";

export const Container = styled(StyledCenterContainerColumn)`
  height: ${() => Header_Height}px;
  max-height: ${() => Header_Height}px;
`;

export const StyledContainer = styled(StyledRowMargin)`
  flex-direction: column;

  @media (${(p) => p.theme.responsive.tablet}) {
    flex-direction: row;
  }
`;

export const LogoContainer = styled(StyledContainerBasic)`
  background-image: url("img/mountain.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 100px;
  margin-right: 20px;
  height: 100px;
  max-height: 66px;
  @media (${(p) => p.theme.responsive.tablet}) {
    max-height: 72px;
  }
`;
