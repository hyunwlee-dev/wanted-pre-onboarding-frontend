import PropTypes from "prop-types";

import classes from "./emailInput.module.css";
import { debounce } from "../../../utils/debounce";
export function EmailInput({
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
      maxLength="50"
      placeholder={placeholder}
      type="email"
      onChange={(e) => debounce(onChange(e, 500))}
      {...restProps}
    />
  );
}

EmailInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
