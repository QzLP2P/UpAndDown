import React from "react";
import ReactDOM from "react-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Home from "./domain/Home";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { PageWrapper } from "./shared/styledComponents/container";
import theme from "./shared/theme";

const Root: React.FC<{}> = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme as DefaultTheme}>
        <PageWrapper>
          <Home />
        </PageWrapper>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
