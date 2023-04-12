import { Fragment, useMemo } from "react";

import classes from "./passwordValidation.module.css";
import { usePasswordState } from "../../../contexts/signUpState";
import { isPassword } from "../../../utils/validator";

export function PasswordValidation({ className }) {
  const { password } = usePasswordState();
  const checkIsValidatePw = useMemo(() => {
    if (password.length > 0 && !isPassword(password)) return classes.invalid;
    return classes.valid;
  }, [password]);

  const combineClassName =
    `${classes.repwValidation} ${checkIsValidatePw} ${className}`.trim();

  return <div className={combineClassName}>비밀번호 조건: 8자 이상</div>;
}
