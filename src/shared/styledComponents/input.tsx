import { TextField } from "@material-ui/core";
import styled, { css } from "styled-components";

export const NumberTextField = styled(TextField).attrs({
  variant: "filled",
  type: "number",
})``;

export const PlayerNameTextField = styled(TextField).attrs({
  variant: "filled",
  type: "text",
  required: true,
})``;