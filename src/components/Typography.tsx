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
    case "button":
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
  text-overflow: ${(props) => (Boolean(props.ellipsis) ? "ellipsis" : "")};
  overflow: ${(props) => (Boolean(props.ellipsis) ? "hidden" : "")};
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.clamp};
  -webkit-box-orient: vertical;
  margin: ${(props) => props.type === "button" && "8px"};
`;

const formatText = (type: TypographyTheme["type"], text: string) => {
  if (type === "button") {
    return text.toUpperCase();
  }

  return text;
};

export const Typography = ({
  type,
  color,
  children,
  ellipsis = false,
  clamp,
}: TypographyTheme & { children: string }) => {
  if (type && isHeader(type)) {
    // Type assertion is needed. No other cases are possible.
    const TypographyHeader = styled[type as "h1" | "h2" | "h3" | "h4"]`
      color: ${(props) =>
        color
          ? props.theme.typography.color[color]
          : props.theme.typography.color.default};
      text-overflow: ${() => (ellipsis ? "ellipsis" : "")};
      overflow: ${() => (ellipsis ? "hidden" : "")};
      line-clamp: clamp;
      box-orient: vertical;
    `;

    return <TypographyHeader>{children}</TypographyHeader>;
  }

  return (
    <TypographyBlock
      clamp={clamp}
      ellipsis={ellipsis}
      type={type}
      color={color}
    >
      {formatText(type, children)}
    </TypographyBlock>
  );
};
