import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/components/app/store";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/GlobalStyles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
