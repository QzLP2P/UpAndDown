import { TextField } from "@material-ui/core";
import styled, { css } from "styled-components";

export const StyledTextField = styled(TextField).attrs({
  variant: 'outlined',
  margin: 'normal',
})`
  width: 100%;
`;

export const NumberTextField = styled(StyledTextField).attrs({
  type: "number",
})``;

export const RequiredTextField = styled(StyledTextField).attrs({
  type: "text",
  required: true,
})``;