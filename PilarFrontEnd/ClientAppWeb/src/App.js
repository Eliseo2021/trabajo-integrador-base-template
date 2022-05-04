import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Routes from "./pages/routes";
import { store } from "./redux/store";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8e1537',
    },
    secondary: {
      main: '#ff0049',
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </CssBaseline>
    </Provider>
  );
};

export default App;
