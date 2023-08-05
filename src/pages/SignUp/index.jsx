import { useDocumentTitle } from '../../hooks';
import classes from './signUp.module.css';
import { A11yHidden } from '../../components/';

const SignUp = () => {
  useDocumentTitle('create account page')
  return (
    <div className={classes.signUp}>
      <A11yHidden as='h1'>create account page</A11yHidden>
      회원가입
    </div>
  )
}

export default SignUp;
