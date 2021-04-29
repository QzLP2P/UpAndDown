import styled from "styled-components";
import { StyledContainerColumn } from "../../shared/styledComponents/container";

export const Container = styled(StyledContainerColumn)`
  overflow-x: hidden;
  // background-color: ${(p) => p.theme.colors.background.main};
  box-shadow: 0 0 10rem 0 rgb(0 0 0 / 20%);
  background-color: rgb(0 0 0 / 40%);
  backdrop-filter: blur(100px);
`;
