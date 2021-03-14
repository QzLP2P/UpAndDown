import styled from "styled-components";
import { PrimaryButton } from "../../../shared/styledComponents/button";
import {
  StyledCenterContainerColumn,
  StyledContainerColumn,
  StyledContainerRow,
} from "../../../shared/styledComponents/container";
import {
  NumberTextField,
  PlayerNameTextField,
} from "../../../shared/styledComponents/input";

export const Container = styled(StyledCenterContainerColumn)``;

export const StyledRow = styled(StyledContainerRow)`
  max-height: 100px;
  margin-bottom: 10px;
`;

export const StyledInput = styled(NumberTextField)`
  width: 100%;
`;

export const StyledTextInput = styled(PlayerNameTextField)`
  width: 100%;
`;

export const StyledButton = styled(PrimaryButton)``;
