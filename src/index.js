import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#321450",
      main: "#e8e8e8"
    },
    secondary: {
      main: "#b1c5d4",
      dark: " 	#ff5252"
    }
  }
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={darkTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  rootElement
);
