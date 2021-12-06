import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import storeConfig from "./store/storeConfig";

const store = storeConfig();

ReactDOM.render(
  // Integração entre o react e o redux
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
