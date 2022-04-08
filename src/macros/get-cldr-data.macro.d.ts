export type ParentLocales = Record<Locale, string | undefined>;

export type Countries = Record<
  Locale,
  Record<
    Country,
    {
      code: Country;
      name: string;
    }
  >
>;

export type Languages = Record<
  Locale,
  Record<
    Country,
    {
      code: Country;
      name: string;
    }
  >
>;

export type CURRENCIES = Record<
  Locale,
  Record<
    Currency,
    {
      displayName: {
        few: string;
        many: string;
        one: string;
        other: string;
      };
      name: string;
      symbol: string;
      variant: string;
    }
  >
>;

export function getParentLocales(): ParentLocales;
export function getCountries(): Countries;
export function getLanguages(): Languages;
export function getCurrenciesAdditionalInformation(): CURRENCIES;
