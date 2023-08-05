import { useDocumentTitle } from '../../hooks';
import classes from './signIn.module.css';

const SignIn = () => {
  useDocumentTitle('login page');
  return (
    <div className={classes.siginIn}>
      로그인
    </div>
  )
}

export default SignIn;
