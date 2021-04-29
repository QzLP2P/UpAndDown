import styled from "styled-components";
import { Footer_Height } from "../../../shared/constants";
import { StyledContainerBasic } from "../../../shared/styledComponents/container";
import { H5 } from "../../../shared/styledComponents/text";

export const Container = styled(StyledContainerBasic)`
  position: absolute;
  bottom: 0px;
  height: ${() => Footer_Height}px;
  max-height: ${() => Footer_Height}px;
`;

export const StyledText = styled(H5)`
  cursor: pointer;
`;

export const ImgStyled = styled.img`
  height: ${() => Footer_Height}px;
  max-height: ${() => Footer_Height}px;
  cursor: pointer;
`;
