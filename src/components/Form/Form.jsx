import { A11yHidden } from "../A11yHidden";
import classes from './form.module.css';

const Form = ({className = '', action, children, legendText = '', ...restProps }) => {
  const combinedClassName = `${className} ${classes.form}`.trim();
  return (
    <form className={combinedClassName} {...restProps}>
      <fieldset className={classes.fieldset}>
        <A11yHidden as='legend'>{legendText}</A11yHidden>
        {children} 
      </fieldset>
    </form>
  )
}

export { Form };
