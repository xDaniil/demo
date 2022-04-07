import { ThemeProvider } from "styled-components";
import { Chart } from "./charts";
import { Layout, theme } from "./components";

function App() {
  return (
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
  );
}

export default App;
