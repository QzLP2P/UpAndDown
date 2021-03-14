import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Home from "./domain/Home";
import reportWebVitals from "./reportWebVitals";
import { PageWrapper } from "./shared/styledComponents/container";
import theme from "./shared/theme";
import { createStore, StoreProvider } from "./store";
import "./index.css";
import "./shared/utils/i18n";

const rootStore = createStore();

const Root: React.FC<{}> = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme as DefaultTheme}>
        <StoreProvider value={rootStore}>
          {/* <BrowserRouter> */}
          <Suspense fallback={<div>ABC</div>}>
            <PageWrapper>
              <Home />
            </PageWrapper>
          </Suspense>
          {/* </BrowserRouter> */}
        </StoreProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
