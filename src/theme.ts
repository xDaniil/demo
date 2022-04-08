import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: "5px",

  typography: {
    size: "14px",
    weight: "400",
    color: {
      default: "rgb(33, 33, 33)",
      secondary: "rgb(255, 255, 255)",
    },
  },

  colors: {
    main: "rgb(217, 220, 214)",
    secondary: "rgb(22, 66, 91)",
    light: "rgb(129, 195, 215)",
    accent: "rgb(58, 124, 165)",
  },

  button: {
    primary: {
      color: "white",
    },
    secondary: {
      color: "blue",
    },
    ghost: {
      color: "grey",
    },
  },
};

export type TypographyTheme = {
  color?: "default" | "secondary";
  type: "title" | "subtitle" | "body" | "h1" | "h2" | "h3" | "h4";
};
