import styled from "styled-components";
import { PrimaryButton } from "../../../shared/styledComponents/button";
import {
  StyledCenterContainerColumn,
  StyledColumnMargin,
  StyledContainerColumn,
  StyledContainerRow,
} from "../../../shared/styledComponents/container";
import { NumberTextField } from "../../../shared/styledComponents/input";

export const Container = styled(StyledCenterContainerColumn)``;

export const StyledRow = styled(StyledContainerRow)`
  max-height: 100px;
  min-width: 100%;
`;

export const RoundContainer = styled(StyledColumnMargin)`
overflow-x: auto;
`;

export const StyledColumn = styled(StyledContainerColumn)`
  max-width: 50%;
`;

export const StyledInput = styled(NumberTextField)`
  width: 50%;
`;

export const StyledButton = styled(PrimaryButton)``;

export const ImgStyled = styled.img`
  height: 32px;
  max-height: 32px;
`;
