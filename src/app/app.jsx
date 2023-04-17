import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/global.css";
import "../styles/theme.css";
import classes from "./app.module.css";
import { SignUpContextProvider } from "../contexts/signUpState";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { SignInContextProvider } from "../contexts/signInState";
import { lazy, Suspense } from "react";
import { useGlobalState } from "../contexts/globalState";
import { RequiredAuth } from "../component/route/auth/requireAuth";
import { TodoContextProvider } from "../contexts/todoState";

// import { loader } from "../pages/todos/todos";

const BaseLayout = lazy(() => import("../component/route/layout/baseLayout"));
const SignIn = lazy(() => import("../pages/signIn/signIn"));
const SignUp = lazy(() => import("../pages/signUp/signUp"));
const NotFound = lazy(() => import("../pages/notFound/notFound"));
const Todos = lazy(() => import("../pages/todos/todos"));

function App() {
  const { navList, updateNavList } = useGlobalState();
  const auth = localStorage.getItem("access_token");

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
        {
          path: "/todo",
          element: <Todos />,
          // loader: loader,
        },
      ],
    },
  ]);

  return (
    <div className={classes.App}>
      <Suspense fallback="Loading results...">
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
