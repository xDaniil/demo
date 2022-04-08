import styled from "styled-components";
import { TypographyTheme } from "../theme";

const getTypographySizeByType = (type: TypographyTheme["type"]) => {
  switch (type) {
    case "title":
      return "32px";
    case "body":
      return "14px";
    case "subtitle":
      return "24px";
    case "h1":
      return "32px";
    case "h2":
      return "24px";
    case "h3":
      return "19px";
    case "h4":
      return "16px";
    default:
      return "";
  }
};

const isHeader = (type: TypographyTheme["type"]) => {
  return type === "h1" || type === "h2" || type === "h3" || type === "h4";
};

const TypographyBlock = styled.p<TypographyTheme>`
  font-size: ${(props) =>
    getTypographySizeByType(props.type) || props.theme.typography.size};
  color: ${(props) =>
    props.color
      ? props.theme.typography.color[props.color]
      : props.theme.typography.color.default};
`;

export const Typography = ({
  type,
  color,
  children,
}: TypographyTheme & { children: string }) => {
  if (type && isHeader(type)) {
    // Type assertion is needed. No other cases are possible.
    const TypographyHeader = styled[type as "h1" | "h2" | "h3" | "h4"]`
      color: ${(props) =>
        color
          ? props.theme.typography.color[color]
          : props.theme.typography.color.default};
    `;

    return <TypographyHeader>{children}</TypographyHeader>;
  }

  return (
    <TypographyBlock type={type} color={color}>
      {children}
    </TypographyBlock>
  );
};
