import styled from "styled-components";
import {
  StyledCenterContainerColumn,
  StyledContainerBasic,
  StyledContainerColumn,
  StyledContainerRow,
} from "../../../shared/styledComponents/container";
import { H6 } from "../../../shared/styledComponents/text";

export const Container = styled(StyledCenterContainerColumn)``;

export const StyledRow = styled(StyledContainerRow)`
  max-height: 128px;
  margin-bottom: 10px;
  border-top: 1px solid gray;
  border-top: 1px solid gray;

`;

export const StyledScoreContainer = styled(StyledContainerBasic)`
  max-width: 25%;
`;

export const PlayerContainer = styled(StyledContainerColumn)``;

export const StyledScoreSpan = styled(H6)`
  margin-left: 50%;
`;
export const StyledSpan = styled(H6)``;

