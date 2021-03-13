import styled from "styled-components";
import { Header_Height } from "../../../shared/constants";
import { StyledContainerBasic } from "../../../shared/styledComponents/container";

export const Container = styled(StyledContainerBasic)`
  height: ${() => Header_Height}px;
  max-height: ${() => Header_Height}px;
  background-color: green;

`;
