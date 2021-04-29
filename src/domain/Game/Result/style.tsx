import styled from "styled-components";
import {
  StyledCenterContainerColumn,
  StyledContainerBasic,
  StyledContainerColumn,
  StyledContainerRow,
  StyledColumnMargin,
} from "../../../shared/styledComponents/container";
import { H6 } from "../../../shared/styledComponents/text";

export const Container = styled(StyledCenterContainerColumn)``;

export const StyledRow = styled(StyledContainerRow)`
  max-height: 128px;
`;

export const StyledScoreContainer = styled(StyledContainerBasic)`
  max-width: 25%;
`;

export const StyledResultContainer = styled(StyledColumnMargin)`
  justify-content: space-around;
`;

export const PlayerContainer = styled(StyledContainerColumn)``;

export const StyledScoreSpan = styled(H6)`
  margin-left: 50%;
`;
export const StyledSpan = styled(H6)``;
