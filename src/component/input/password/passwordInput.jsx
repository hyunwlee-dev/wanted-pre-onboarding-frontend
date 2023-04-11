import PropTypes from "prop-types";
import classes from "./passwordInput.module.css";
import { debounce } from "../../../utils/debounce";
import { useMemo } from "react";
import { usePasswordState } from "../../../contexts/signUpState";

export function PasswordInput({
  id: useId,
  className,
  placeholder,
  ...restProps
}) {
  const combineClassName = `${classes.Input} ${className}`.trim();
  const { password, updatePassword } = usePasswordState();

  return useMemo(
    () => (
      <input
        className={combineClassName}
        id={useId}
        maxLength="16"
        placeholder={placeholder}
        type="password"
        value={password}
        onChange={(e) => debounce(updatePassword(e.target.value), 500)}
        {...restProps}
      />
    ),
    [password]
  );
}

PasswordInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
