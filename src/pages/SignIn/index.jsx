import { A11yHidden } from '../../components';
import { useDocumentTitle } from '../../hooks';
import classes from './signIn.module.css';

const SignIn = () => {
  useDocumentTitle('login page');
  return (
    <div className={classes.siginIn}>
      <A11yHidden as='h1'>login page</A11yHidden>
      로그인
    </div>
  )
}

export default SignIn;
