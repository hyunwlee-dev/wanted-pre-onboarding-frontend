import PropTypes from "prop-types";

import classes from "./button.module.css";
import { memo } from "react";

export const Button = memo(function Button({
  className,
  children,
  isAvailableSignUp,
  ...restProps
}) {
  const combineClassNames = `${classes.Button} ${className}`.trim();

  return (
    <button
      type="button"
      className={combineClassNames}
      disabled={!isAvailableSignUp}
      {...restProps}
    >
      {children}
    </button>
  );
});

Button.defaultProps = {
  isAvailableSignUp: false,
};

Button.propTypes = {
  isSecondary: PropTypes.bool,
};
