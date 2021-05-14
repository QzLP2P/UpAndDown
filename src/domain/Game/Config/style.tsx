import styled from "styled-components";
import { PrimaryButton } from "../../../shared/styledComponents/button";
import {
  StyledCenterContainerColumn,
  StyledColumnMargin,
  StyledContainerRow,
} from "../../../shared/styledComponents/container";
import { GameContainerProps } from "./type";

export const Container = styled(StyledCenterContainerColumn)`
  overflow: hidden;
`;

export const MarginContainer = styled(StyledColumnMargin)`
  max-height: calc(100%);
`;

export const DisclaimerContainer = styled(Container)`
  max-height: 160px;
`;

export const GameContainer = styled(
  StyledCenterContainerColumn
)<GameContainerProps>`
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledRow = styled(StyledContainerRow)`
  max-height: 100px;
`;

export const StyledButton = styled(PrimaryButton)``;
