import classes from "./app.module.css";
import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/global.css";
import "../styles/theme.css";
import { SignUp } from "../pages/signUp/signUp";
import { SignUpContextProvider } from "../contexts/signUpState";

function App() {
  return (
    <div className={classes.App}>
      <SignUpContextProvider>
        <SignUp />
      </SignUpContextProvider>
    </div>
  );
}

export default App;
