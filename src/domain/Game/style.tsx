import styled from "styled-components";
import { Footer_Height, Header_Height } from "../../shared/constants";
import {
  StyledContainerColumn,
} from "../../shared/styledComponents/container";

export const Container = styled(StyledContainerColumn)`
  max-height: calc(100% - ${Footer_Height + Header_Height + 40}px);
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-y: auto;
  overflow-x: hidden;

`;
