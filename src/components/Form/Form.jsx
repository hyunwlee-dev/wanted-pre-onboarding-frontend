import { A11yHidden } from "../A11yHidden";
import classes from './form.module.css';

const Form = ({ action = () => {}, children, legendText = '', ...restProps }) => {
  return (
    <form className={classes.form} action={action} {...restProps}>
      <fieldset className={classes.fieldset}>
        <A11yHidden as='legend'>{legendText}</A11yHidden>
        {children} 
      </fieldset>
    </form>
  )
}

export { Form };
