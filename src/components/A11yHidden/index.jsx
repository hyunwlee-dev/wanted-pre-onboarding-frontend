import { forwardRef } from "react";
import classes from './a11yHidden.module.css';

const A11yHidden = forwardRef(function A11yHidden(
  { className = '', as: Component = 'span', children, ...restProps}, ref
) {
  const combinedClassName = `${classes.a11yHidden} ${className}`.trim();
  return (
    <Component ref={ref} className={combinedClassName} {...restProps}>
      {children}
    </Component>
  );
});

export { A11yHidden };
