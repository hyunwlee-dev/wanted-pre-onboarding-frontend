import { node, string } from "prop-types";
import classes from "./container.module.css";

/* Component ---------------------------------------------------------------- */

export function Container({
  as: Component,
  className,
  children,
  ...restProps
}) {
  const combineClassNames = `${classes.Container} ${className}`.trim();

  return (
    <Component className={combineClassNames} {...restProps}>
      {children}
    </Component>
  );
}

/* Props -------------------------------------------------------------------- */

Container.defaultProps = {
  as: "div",
  className: "",
};

Container.propTypes = {
  as: string,
  className: string,
  children: node,
};
