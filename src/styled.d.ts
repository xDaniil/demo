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
    };

    colors: {
      typography: {
        default: string;
      };
      main: string;
      secondary: string;
    };

    button: {
      primary: ButtonTheme;
      secondary: ButtonTheme;
      ghost: ButtonTheme;
    };
  }
}
