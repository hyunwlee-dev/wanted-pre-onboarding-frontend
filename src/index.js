import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/app";
import reportWebVitals from "./reportWebVitals";
import { GlobalStateProvider } from "./contexts/globalState";
import {
  EmailStateProvider,
  PasswordStateProvider,
  SignUpContextProvider,
} from "./contexts/signUpState";
import { SignInContextProvider } from "./contexts/signInState";
import { TodoContextProvider } from "./contexts/todoState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <SignInContextProvider>
        <SignUpContextProvider>
          <TodoContextProvider>
            <App />
          </TodoContextProvider>
        </SignUpContextProvider>
      </SignInContextProvider>
    </GlobalStateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
