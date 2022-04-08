import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: "12px",

  typography: {
    size: "14px",
    weight: "400",
    color: {
      default: "rgb(33, 33, 33)",
      secondary: "rgb(255, 255, 255)",
    },
  },

  colors: {
    main: "rgb(240, 240, 240)",
    secondary: "rgb(22, 66, 91)",
    light: "rgb(129, 195, 215)",
    accent: "rgb(58, 124, 165)",
  },

  button: {
    primary: {
      color: "white",
      hoverColor: "white",
      hoverBackground: "rgb(176, 227, 255)",
    },
    secondary: {
      color: "rgb(22, 66, 91)",
      hoverColor: "white",
      hoverBackground: "rgb(40, 130, 181)",
    },
    ghost: {
      color: "rgb(240, 240, 240)",
      hoverColor: "rgb(33, 33, 33)",
      hoverBackground: "rgb(240, 240, 240)",
    },
  },
};

export type TypographyTheme = {
  color?: "default" | "secondary";
  type: "title" | "subtitle" | "body" | "h1" | "h2" | "h3" | "h4" | "button";
  ellipsis?: boolean;
  clamp?: number;
};
