import { useDocumentTitle } from '../../hooks';
import classes from './signUp.module.css';

const SignUp = () => {
  useDocumentTitle('create account page')
  return (
    <div className={classes.signUp}>
      회원가입
    </div>
  )
}

export default SignUp;
