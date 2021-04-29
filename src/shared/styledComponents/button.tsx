import { Button } from "@material-ui/core";
import styled, { css } from "styled-components";

export const PrimaryButton = styled(Button).attrs({
  variant: "contained",
  color: "primary",
})``;

export const SecondaryButton = styled(Button).attrs({
  variant: "contained",
  color: "secondary",
})``;

export const IconButton = styled(Button).attrs({
  variant: "contained",
  color: "primary",
  size: "small",
  component: "div",
})``;
