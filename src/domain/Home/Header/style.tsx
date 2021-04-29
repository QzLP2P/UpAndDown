import styled from "styled-components";
import { Header_Height } from "../../../shared/constants";
import { StyledContainerBasic, StyledCenterContainerColumn } from "../../../shared/styledComponents/container";

export const Container = styled(StyledCenterContainerColumn)`
  height: ${() => Header_Height}px;
  max-height: ${() => Header_Height}px;
`;

export const LogoContainer = styled(StyledContainerBasic)`
  background-image: url("img/elevator.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
