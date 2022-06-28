// import { Counter } from './components'
import { HomeView } from "./pages";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import "./App.css";
import Router from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
