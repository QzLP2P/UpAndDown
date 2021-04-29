import styled from "styled-components";
import { PrimaryButton } from "../../../shared/styledComponents/button";
import {
  StyledCenterContainerColumn,
  StyledContainerColumn,
  StyledContainerRow,
} from "../../../shared/styledComponents/container";
import {
  NumberTextField,
  RequiredTextField,
} from "../../../shared/styledComponents/input";

export const Container = styled(StyledCenterContainerColumn)``;

export const StyledRow = styled(StyledContainerRow)`
  max-height: 100px;
  min-width: 100%;
  margin-bottom: 10px;

`;

export const StyledColumn = styled(StyledContainerColumn)`
  max-width: 30%;
`;

export const StyledInput = styled(NumberTextField)`
  width: 50%;
`;

export const StyledButton = styled(PrimaryButton)``;
