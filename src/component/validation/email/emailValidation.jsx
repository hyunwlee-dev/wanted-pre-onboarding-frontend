import { Fragment, useMemo } from "react";

import classes from "./emailValidation.module.css";
import { useEmailState } from "../../../contexts/signUpState";
import { isEmail } from "../../../utils/validator";

export function EmailValidation({ className }) {
  const { email } = useEmailState();

  const checkIsValidateEmail = useMemo(() => {
    if (email.length > 0 && !isEmail(email)) return classes.invalid;
    return classes.valid;
  }, [email]);

  const combineClassName =
    `${classes.repwValidation} ${checkIsValidateEmail} ${className}`.trim();

  return <div className={combineClassName}>이메일을 다시 확인해주세요.</div>;
}
