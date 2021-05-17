import styled from "styled-components";
import { PrimaryButton } from "shared/styledComponents/button";
import {
  StyledCenterContainerColumn,
  StyledColumnMargin,
} from "shared/styledComponents/container";

export const Container = styled(StyledCenterContainerColumn)`
  overflow: hidden;
`;

export const DisclaimerContainer = styled(Container)`
  max-height: 160px;
  padding-bottom: 20px;
`;

export const PlayerContainer = styled(StyledCenterContainerColumn)`
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 20px;
  margin-right: -10px;
  margin-left: -10px;
`;

export const RoundContainer = styled(StyledColumnMargin)`
  overflow-x: auto;
`;

export const StyledButton = styled(PrimaryButton)``;
