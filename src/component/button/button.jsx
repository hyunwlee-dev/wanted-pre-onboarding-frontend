import PropTypes from "prop-types";

import classes from "./button.module.css";

export function Button({ className, children, ...restProps }) {
  const combineClassNames = `${classes.Button} ${className}`.trim();

  return (
    <button type="button" className={combineClassNames} {...restProps}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  isAvailableSignUp: false,
};

Button.propTypes = {
  isSecondary: PropTypes.bool,
};
