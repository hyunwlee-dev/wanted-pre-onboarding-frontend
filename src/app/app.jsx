import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/global.css";
import "../styles/theme.css";
import classes from "./app.module.css";
import { SignIn } from "../pages/signIn/signIn";
import { SignUp } from "../pages/signUp/signUp";
import { NotFound } from "../pages/notFound/notFound";
import { BaseLayout } from "../component/route/baseLayout";
import { SignUpContextProvider } from "../contexts/signUpState";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignInContextProvider } from "../contexts/signInState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <>main</>,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <div className={classes.App}>
      <SignInContextProvider>
        <SignUpContextProvider>
          <RouterProvider router={router} />
        </SignUpContextProvider>
      </SignInContextProvider>
    </div>
  );
}

export default App;
