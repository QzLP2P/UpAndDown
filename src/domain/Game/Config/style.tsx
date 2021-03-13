import styled from "styled-components";
import { PrimaryButton } from "../../../shared/styledComponents/button";
import {
  StyledContainerColumn,
  StyledContainerRow,
} from "../../../shared/styledComponents/container";
import { NumberTextField } from "../../../shared/styledComponents/input";

export const Container = styled(StyledContainerColumn)``;

export const StyledRow = styled(StyledContainerRow)`
  max-height: 100px;
`;

export const StyledInput = styled(NumberTextField)`
  width: 100%;
`;

export const StyledButton = styled(PrimaryButton)``;
