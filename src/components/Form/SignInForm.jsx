import classes from './signInForm.module.css';

const SignInForm = ({ children }) => {
  return (
    <div className={classes.signInForm}>
      로그인 입력 폼
    </div>
  )
}

export { SignInForm };
