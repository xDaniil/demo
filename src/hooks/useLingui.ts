import { i18n } from "@lingui/core";
import { CompiledMessage } from "@lingui/core/cjs/i18n";
import * as pluralsLanguages from "make-plural/plurals";
import { useEffect, useState } from "react";
import { getBrowserLocale } from "../utils";

type ICatalogs = Record<string, Record<string, CompiledMessage>>;
const catalogs: ICatalogs = {};

const activateLanguage = async (locale: string) => {
  // TODO: remove next line we added multi-languages
  locale = "en";
  if (!catalogs[locale]) {
    const { messages } = await import(
      `@lingui/loader!../locales/${locale}/messages.po`
    );
    i18n.loadLocaleData(locale, {
      // @ts-ignore-line
      plurals: pluralsLanguages[locale]!,
    });
    i18n.load(locale, messages);
    i18n.activate(locale);
  }
};

export const useLingui = () => {
  const [firstLoading, setFirstLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await activateLanguage(getBrowserLocale());
      if (firstLoading) {
        setFirstLoading(false);
      }
    })();

    const listener = () => {
      (async () => {
        await activateLanguage(getBrowserLocale());
      })();
    };

    window.addEventListener("languagechange", listener);
    return () => {
      window.removeEventListener("languagechange", listener);
    };
  }, []);

  return firstLoading;
};
