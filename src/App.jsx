import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { BaseLayout } from "./components";
function App() {
  const Welcome = lazy(() => import("./pages/Welcome"));
  const SignIn = lazy(() => import("./pages/SignIn"));
  const SignUp = lazy(() => import("./pages/SignUp"));
  const Todo = lazy(() => import("./pages/Todo"));
  const NotFound = lazy(() => import("./pages/NotFound"));
  const router = createBrowserRouter([
    {
      path: '/',
      element: <BaseLayout/>,
      errorElement: <NotFound/>,
      children: [
        { path: '/', element: <Welcome/> },
        { path: 'signin', element: <SignIn/> },
        { path: 'signup', element: <SignUp/> },
        { path: 'todo', element: <Todo/> },
      ]
    } 
  ]);

  return (
    <div className="App">
      <Suspense fallback={'loading...'}>
        <RouterProvider router={router}/>
      </Suspense>
    </div>
  );
}

export default App;
