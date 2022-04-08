import { head } from "ramda";
import { AVAILABLE_LOCALES, PARENT_LOCALES } from "../macros";

const getParentLocale = (locale: string): string => {
  const possibleParent = PARENT_LOCALES[locale];

  if (possibleParent) {
    return possibleParent;
  }

  const localeParts = locale.split("-");

  if (localeParts.length === 1) {
    return head(localeParts) || "en";
  }

  return localeParts.slice(0, localeParts.length - 1).join("-");
};

export default (): string => {
  const locale = navigator.languages.reduceRight<string>((acc, locale) => {
    const parentLocale = getParentLocale(locale);

    return AVAILABLE_LOCALES.includes(parentLocale) ? parentLocale : acc;
  }, "root");

  return locale !== "root" ? locale : "en";
};
