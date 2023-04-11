import { Fragment } from "react";

import classes from "./passwordValidation.module.css";

export function PasswordValidation({ className }) {
  const checkIsValidatePw = (isValidate = false) => {
    if (isValidate) return classes.valid;

    return classes.invalid;
  };
  const combineClassName = `${
    classes.repwValidation
  } ${checkIsValidatePw()} ${className}`.trim();

  return (
    <Fragment>
      {/* {isValidate && ( */}
      {/* <div className={combineClassName}>비밀번호가 일치합니다!</div> */}
      {/* )} */}
      {<div className={combineClassName}>비밀번호를 다시 확인해주세요.</div>}
    </Fragment>
  );
}
