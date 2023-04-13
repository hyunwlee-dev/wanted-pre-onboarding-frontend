import PropTypes from "prop-types";

import classes from "./emailInput.module.css";
import { debounce } from "../../../utils/debounce";
import { memo, useMemo } from "react";
export const EmailInput = memo(function EmailInput({
  value,
  onChange,
  id: useId,
  className,
  placeholder,
  ...restProps
}) {
  const combineClassName = `${classes.Input} ${className}`.trim();
  return (
    <input
      className={combineClassName}
      id={useId}
      maxLength="50"
      placeholder={placeholder}
      type="email"
      value={value}
      onChange={(e) => debounce(onChange(e.target.value), 500)}
      {...restProps}
    />
  );
});

EmailInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
