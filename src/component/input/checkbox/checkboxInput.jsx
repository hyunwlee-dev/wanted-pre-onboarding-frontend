import PropTypes from "prop-types";

import classes from "./checkboxInput.module.css";
export function CheckboxInput({
  className,
  isChecked,
  handleCheckbox,
  ...restProps
}) {
  const combineClassName = `${classes.input} ${className}`.trim();

  return (
    <input
      type="checkbox"
      checked={isChecked}
      className={combineClassName}
      {...restProps}
    />
  );
}

CheckboxInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
