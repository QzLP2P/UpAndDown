import styled from "styled-components";
import { Footer_Height } from "../../../shared/constants";
import { StyledContainerBasic } from "../../../shared/styledComponents/container";

export const Container = styled(StyledContainerBasic)`
  position: absolute;
  bottom: 0px;
  height: ${() => Footer_Height}px;
  max-height: ${() => Footer_Height}px;
  background-color: gray;

`;
