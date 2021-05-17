import styled from "styled-components";
import {
  StyledContainerColumn,
  StyledContainerRow,
} from "shared/styledComponents/container";
import { NumberTextField } from "shared/styledComponents/input";

export const StyledRow = styled(StyledContainerRow)`
  max-height: 100px;
  min-width: 100%;
`;

export const StyledColumn = styled(StyledContainerColumn)`
  max-width: 50%;
  min-width: 33%;
`;

export const StyledInput = styled(NumberTextField)`
  width: 100%;
`;

export const ImgStyled = styled.img`
  height: 32px;
  max-height: 32px;
`;

export const CheckContainer = styled(StyledContainerColumn)`
  margin-left: 10px;
  width: 20px;
  margin-right: 0;
`;
