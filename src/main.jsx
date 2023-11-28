import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { app } from "./firebase.config.js";
import { store } from "./redux/store.js";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} app={app}>
      <App />
    </Provider>
  </React.StrictMode>
);
