import PropTypes from "prop-types";

import classes from "./button.module.css";

// function getIsSecondary(isSecondary) {
//   if (isSecondary) return "secondary";

//   return "primary";
// }

export function Button({ isSecondary, className, children, ...restProps }) {
  // const combineClassNames = `${classes.Button} ${classes[getIsSecondary(isSecondary)]} ${className}`.trim();
  const combineClassNames = `${classes.Button} ${className}`.trim();

  return (
    <button className={combineClassNames} type="button" {...restProps}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  isSecondary: false,
};

Button.propTypes = {
  isSecondary: PropTypes.bool,
};
