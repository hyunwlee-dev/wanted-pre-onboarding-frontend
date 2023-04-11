import PropTypes from "prop-types";

import classes from "./label.module.css";
import { A11yHidden } from "../a11yHidden/a11yHidden";

/* ----------------------------------------------------------------------- */

export function Label({
  className,
  htmlFor,
  invisibleLabel,
  labelStyle,
  children,
  ...restProps
}) {
  const combineClassNames =
    `${classes.label} ${className} ${classes[labelStyle]}`.trim();
  if (!invisibleLabel) {
    return (
      <label className={combineClassNames} htmlFor={htmlFor} {...restProps}>
        {children}
      </label>
    );
  }

  return (
    <A11yHidden as="label" className={classes.label} htmlFor={htmlFor}>
      {htmlFor}
    </A11yHidden>
  );
}

/* Props -------------------------------------------------------------------- */

Label.defaultProps = {
  htmlFor: "",
  invisibleLabel: false,
  labelStyle: "Medium",
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  invisibleLabel: PropTypes.bool,
  labelStyle: PropTypes.oneOf(["Small", "Medium", "Large", "XL", "XXL"]),
};
