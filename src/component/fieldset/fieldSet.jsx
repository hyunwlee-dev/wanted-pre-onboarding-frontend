import PropTypes from "prop-types";

import classes from "./fieldSet.module.css";

export function Fieldset({ className, legend, children, ...restProps }) {
  const combineClassNames = `${classes.fieldset} ${className}`.trim();

  return (
    <fieldset className={combineClassNames} {...restProps}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}

Fieldset.propTypes = {
  children: PropTypes.node,
  legend: PropTypes.string,
};
