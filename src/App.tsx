import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { observer } from "mobx-react-lite";
import { Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { closeSocket } from "./api";
import { PageLoadingSpinner } from "./components/Spinner";
import { useStore } from "./hooks";
import { useLingui } from "./hooks/useLingui";
import { RoutesProvider } from "./routing";
import { theme } from "./theme";

const App = observer(() => {
  const localeLoading = useLingui();
  const [initLoading, setInitLoading] = useState(true);
  const { init } = useStore();

  useEffect(() => {
    (async () => {
      try {
        await init();
      } catch (error) {
        console.error(error);
      } finally {
        setInitLoading(false);
      }
    })();

    return () => {
      closeSocket();
    };
  }, []);

  return (
    <Suspense fallback={<></>}>
      <I18nProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          {(localeLoading || initLoading) && <PageLoadingSpinner />}
          {!localeLoading && !initLoading && <RoutesProvider />}
        </ThemeProvider>
      </I18nProvider>
    </Suspense>
  );
});

export default App;
