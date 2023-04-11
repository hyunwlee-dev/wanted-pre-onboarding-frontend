import PropTypes from "prop-types";

import classes from "./emailInput.module.css";
import { debounce } from "../../../utils/debounce";
import { useMemo } from "react";
import { useEmailState } from "../../../contexts/signUpState";
export function EmailInput({
  id: useId,
  className,
  placeholder,
  ...restProps
}) {
  const combineClassName = `${classes.Input} ${className}`.trim();
  const { email, updateEmail } = useEmailState();
  return (
    <input
      className={combineClassName}
      id={useId}
      maxLength="50"
      placeholder={placeholder}
      type="email"
      value={email}
      onChange={(e) => debounce(updateEmail(e.target.value), 500)}
      {...restProps}
    />
  );
}

EmailInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
