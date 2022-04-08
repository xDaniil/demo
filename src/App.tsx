import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { Chart } from "./charts";
import { Layout } from "./components";
import { useLingui } from "./hooks/useLingui";
import { theme } from "./theme";

const App = () => {
  const localeLoading = useLingui();

  if (localeLoading) {
    return <></>;
  }

  return (
    <Suspense fallback={<></>}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Chart
            data={[12, 122, 150]}
            styles={{
              width: 10,
              scaleFactor: 22,
            }}
          />
        </Layout>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
