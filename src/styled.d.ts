import "styled-components";

declare module "styled-components" {
  interface ButtonTheme {
    color: string;
  }

  export interface DefaultTheme {
    borderRadius: string;

    typography: {
      size: string;
      weight: string;
      color: {
        default: string;
        secondary: string;
      };
    };

    colors: {
      main: string;
      secondary: string;
      light: string;
      accent: string;
    };

    button: {
      primary: ButtonTheme;
      secondary: ButtonTheme;
      ghost: ButtonTheme;
    };
  }
}
