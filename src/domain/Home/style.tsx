import styled from "styled-components";
import { StyledContainerColumn } from "../../shared/styledComponents/container";

export const Container = styled(StyledContainerColumn)`
  overflow-x: hidden;
  background-color: ${(p) => p.theme.colors.background.main};
`;
