import styled from "styled-components";
import { Footer_Height, Header_Height } from "../../shared/constants";
import {
  StyledContainerColumn,
} from "../../shared/styledComponents/container";

export const Container = styled(StyledContainerColumn)`
  max-height: calc(100% - ${Footer_Height + Header_Height}px);
  overflow-x: auto;
`;
