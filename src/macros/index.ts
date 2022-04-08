import getAvailableLocalesMacro from "./get-available-locales.macro";
import {
  getParentLocales,
  getCountries,
  getLanguages,
  getCurrenciesAdditionalInformation,
} from "./get-cldr-data.macro";

export const AVAILABLE_LOCALES = getAvailableLocalesMacro();
export const PARENT_LOCALES = getParentLocales();
export const COUNTRIES_LOCALES = getCountries();
export const LANGUAGES_LOCALES = getLanguages();
export const CURRENCIES_LOCALES = getCurrenciesAdditionalInformation();
