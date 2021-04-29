import styled, { css } from "styled-components";

export const Split = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(p) => p.theme.colors.border};
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
`;
