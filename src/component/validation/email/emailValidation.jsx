import { Fragment } from "react";

import classes from "./emailValidation.module.css";

export function EmailValidation({ className }) {
  const checkIsValidatePw = (isValidate = false) => {
    if (isValidate) return classes.valid;

    return classes.invalid;
  };
  const combineClassName = `${
    classes.repwValidation
  } ${checkIsValidatePw()} ${className}`.trim();

  return (
    <Fragment>
      {<div className={combineClassName}>이메일을 다시 확인해주세요.</div>}
    </Fragment>
  );
}
