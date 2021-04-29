import styled from "styled-components";

export const SplitNoMargin = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(p) => p.theme.colors.border};
  border: none;
`;

export const Split = styled(SplitNoMargin)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
