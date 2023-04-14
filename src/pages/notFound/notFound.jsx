import { useRouteError } from "react-router-dom";
import classes from "./notFound.module.css";

export function NotFound() {
  const error = useRouteError();

  return (
    <div className={classes.ErrorPage}>
      <h1>Oops!</h1>
      <p>Sorry. an expected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
