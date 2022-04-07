import { ReactNode } from "react";
import styled from "styled-components";

type StyledButtonProps = {
  buttonType: "primary" | "secondary" | "ghost";
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.theme.button[props.buttonType].color};
`;

type Props = {
  type: "primary" | "secondary" | "ghost";
  children: string | ReactNode;
};

export const Button = ({ type, children }: Props) => {
  return <StyledButton buttonType={type}>{children}</StyledButton>;
};
