const { createMacro } = require("babel-plugin-macros");
const { readdirSync } = require("fs");
const { join } = require("path");
const { keys } = require("ramda");

const AVAILABLE_LANGUAGES = readdirSync(join(__dirname, "../locales"), {
  withFileTypes: true,
})
  .filter(
    (dirent) =>
      dirent.isDirectory() &&
      !dirent.name.startsWith("_") &&
      !dirent.name.startsWith(".")
  )
  .map((dirent) => dirent.name);

const valueToASTNode = (value, babel) => {
  const fileNode = babel.parse(`var x = ${JSON.stringify(value)}`);
  return fileNode.program.body[0].declarations[0].init;
};

const getParentLocalesFromCLDR = () => {
  console.info("[DEMO macro][getParentLocalesFromCLDR] loading...");
  const result = require(`cldr-core/supplemental/parentLocales.json`)
    .supplemental.parentLocales.parentLocale;

  console.info("[DEMO macro][getParentLocalesFromCLDR] done.");
  return result;
};

const getCountriesFromCLDR = () => {
  const result = AVAILABLE_LANGUAGES.reduce((acc, language) => {
    console.info("[DEMO macro][getCountriesFromCLDR] loading:", language);

    const territories =
      require(`cldr-localenames-full/main/${language}/territories.json`).main[
        language
      ].localeDisplayNames.territories;
    const territoriesCodes = keys(territories);

    return {
      ...acc,
      [language]: territoriesCodes.reduce((acc, code) => {
        return {
          ...acc,
          [code]: {
            code,
            name: territories[code],
          },
        };
      }, {}),
    };
  }, {});

  console.info("[DEMO macro][getCountriesFromCLDR] done.");
  return result;
};

const getLanguagesFromCLDR = () => {
  const result = AVAILABLE_LANGUAGES.reduce((acc, language) => {
    console.info("[DEMO macro][getLanguagesFromCLDR] loading:", language);
    const languagesNames =
      require(`cldr-localenames-full/main/${language}/languages.json`).main[
        language
      ].localeDisplayNames.languages;

    const languagesCodes = keys(languagesNames);

    return {
      ...acc,
      [language]: languagesCodes.reduce((acc, code) => {
        return {
          ...acc,
          [code]: {
            code,
            name: languagesNames[code],
          },
        };
      }, {}),
    };
  }, {});

  console.info("[DEMO macro][getLanguagesFromCLDR] done.");
  return result;
};

const getCurrenciesAdditionalInformationCLDR = () => {
  const AVAILABLE_CURRENCIES = ["GBP", "USD", "EUR"];

  const result = AVAILABLE_LANGUAGES.reduce((acc, language) => {
    console.info(
      "[DEMO macro][getCurrenciesAdditionalInformationCLDR] loading:",
      language
    );

    const currencies =
      require(`cldr-numbers-full/main/${language}/currencies.json`).main[
        language
      ].numbers.currencies;

    return {
      ...acc,
      [language]: AVAILABLE_CURRENCIES.reduce(
        (acc, currency) => ({
          ...acc,
          [currency]: {
            name: currencies[currency]["displayName"] || currency,
            displayName: {
              one:
                currencies[currency]["displayName-count-one"] ||
                currencies[currency]["displayName-count-other"] ||
                currency,
              few:
                currencies[currency]["displayName-count-few"] ||
                currencies[currency]["displayName-count-other"] ||
                currency,
              many:
                currencies[currency]["displayName-count-many"] ||
                currencies[currency]["displayName-count-other"] ||
                currency,
              other:
                currencies[currency]["displayName-count-other"] || currency,
            },
            symbol:
              currencies[currency]["symbol-alt-narrow"] ||
              currencies[currency]["symbol"] ||
              currency,
            variant:
              currencies[currency]["symbol-alt-variant"] ||
              currencies[currency]["symbol"] ||
              currency,
          },
        }),
        {}
      ),
    };
  }, {});

  console.info("[DEMO macro][getCurrenciesAdditionalInformationCLDR] done.");
  return result;
};

const getCLDRMacro = ({ references, babel }) => {
  references.default &&
    references.default.forEach((referencePath) => {
      const quasiPath = referencePath.parentPath.get("quasi");
      quasiPath.parentPath.replaceWith(
        valueToASTNode(getNotFoundReferencePath(), babel)
      );
    });

  references.getParentLocales &&
    references.getParentLocales.forEach((referencePath) => {
      const quasiPath = referencePath.parentPath.get("quasi");
      quasiPath.parentPath.replaceWith(
        valueToASTNode(getParentLocalesFromCLDR(), babel)
      );
    });

  references.getCountries &&
    references.getCountries.forEach((referencePath) => {
      const quasiPath = referencePath.parentPath.get("quasi");
      quasiPath.parentPath.replaceWith(
        valueToASTNode(getCountriesFromCLDR(), babel)
      );
    });

  references.getLanguages &&
    references.getLanguages.forEach((referencePath) => {
      const quasiPath = referencePath.parentPath.get("quasi");
      quasiPath.parentPath.replaceWith(
        valueToASTNode(getLanguagesFromCLDR(), babel)
      );
    });

  references.getCurrenciesAdditionalInformation &&
    references.getCurrenciesAdditionalInformation.forEach((referencePath) => {
      const quasiPath = referencePath.parentPath.get("quasi");
      quasiPath.parentPath.replaceWith(
        valueToASTNode(getCurrenciesAdditionalInformationCLDR(), babel)
      );
    });
};

module.exports = createMacro(getCLDRMacro);

module.exports.getParentLocales = () => {};
module.exports.getCountries = () => {};
module.exports.getLanguages = () => {};
module.exports.getCurrenciesAdditionalInformation = () => {};
