import classes from "./app.module.css";
import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/global.css";
import "../styles/theme.css";
import { SignUp } from "../pages/signUp/signUp";

function App() {
  return (
    <div className={classes.App}>
      <SignUp />
    </div>
  );
}

export default App;
