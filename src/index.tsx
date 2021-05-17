import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core";

import Home from "domain/Home";
import customMuiTheme from "shared/muiTheme";
import { PageWrapper } from "shared/styledComponents/container";
import theme from "shared/theme";
import "shared/utils/i18n";


import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { createStore, StoreProvider } from "store";

const rootStore = createStore();

const Root: React.FC<{}> = () => {
  return (
    <React.StrictMode>
      {/* <BrowserRouter> */}
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={customMuiTheme}>
            <ThemeProvider theme={theme as DefaultTheme}>
              <StoreProvider value={rootStore}>
                <Suspense fallback={<div>ABC</div>}>
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                </Suspense>
              </StoreProvider>
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      {/* </BrowserRouter> */}
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
