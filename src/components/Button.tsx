import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { Typography } from "./Typography";

type StyledButtonProps = {
  buttonType: "primary" | "secondary" | "ghost";
};

const getBorderColorByButtonType = (
  type: "primary" | "secondary" | "ghost"
) => {
  if (type === "primary" || type === "ghost") {
    return theme.colors.accent;
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.theme.button[props.buttonType].color};
  border-radius: 3px;
  padding: 0.25em 1em;
  border: none;
  cursor: pointer;

  transition: background-color 0.5s;

  &:hover {
    color: ${(props) =>
      props.theme.button[props.buttonType].hoverColor} !important;
    background-color: ${(props) =>
      props.theme.button[props.buttonType].hoverBackground} !important;
  }
`;

type Props = {
  type?: "primary" | "secondary" | "ghost";
  children: string;
  onClick: (event: MouseEventHandler<HTMLButtonElement>) => void;
};

const getTypographyColorByButtonType = (
  buttonType: "primary" | "secondary" | "ghost"
) => {
  if (buttonType === "secondary" || buttonType === "ghost") {
    return "secondary";
  }

  return "default";
};

export const Button = ({ type = "primary", children, onClick }: Props) => {
  return (
    <StyledButton buttonType={type}>
      <Typography type="button" color={getTypographyColorByButtonType(type)}>
        {children}
      </Typography>
    </StyledButton>
  );
};
