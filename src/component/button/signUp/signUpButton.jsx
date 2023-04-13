import PropTypes from "prop-types";

import classes from "./signUpButton.module.css";
import { memo } from "react";

export const SignUpButton = memo(function SignUpButton({
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

SignUpButton.defaultProps = {
  isAvailableSignUp: false,
};

SignUpButton.propTypes = {
  isSecondary: PropTypes.bool,
};
