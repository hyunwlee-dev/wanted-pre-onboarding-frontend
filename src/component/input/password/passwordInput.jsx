import PropTypes from "prop-types";
import classes from "./passwordInput.module.css";
import { debounce } from "../../../utils/debounce";

export function PasswordInput({
  id: useId,
  className,
  placeholder,
  onChange,
  ...restProps
}) {
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      className={combineClassName}
      id={useId}
      maxLength="16"
      placeholder={placeholder}
      type="password"
      onChange={(e) => debounce(onChange(e, 500))}
      {...restProps}
    />
  );
}

PasswordInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
