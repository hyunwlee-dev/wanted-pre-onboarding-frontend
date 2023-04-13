import PropTypes from "prop-types";
import classes from "./passwordInput.module.css";
import { debounce } from "../../../utils/debounce";
import { memo } from "react";

export const PasswordInput = memo(function PasswordInput({
  value,
  id: useId,
  onChange,
  className,
  placeholder,
  ...restProps
}) {
  const combineClassName = `${classes.Input} ${className}`.trim();
  return (
    <input
      className={combineClassName}
      id={useId}
      placeholder={placeholder}
      type="password"
      value={value}
      onChange={(e) => debounce(onChange(e.target.value), 500)}
      {...restProps}
    />
  );
});

PasswordInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
