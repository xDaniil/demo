import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: "5px",

  typography: {
    size: "14px",
    weight: "400",
  },

  colors: {
    typography: {
      default: "black",
    },
    main: "cyan",
    secondary: "magenta",
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
  color?: "string";
  type: "title" | "subtitle" | "body" | "h1" | "h2" | "h3" | "h4";
};
