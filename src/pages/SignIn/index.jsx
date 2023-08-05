import { A11yHidden } from '../../components';
import { AuthFormContainer } from '../../containers';
import { useDocumentTitle } from '../../hooks';
import classes from './signIn.module.css';

const SignIn = () => {
  useDocumentTitle('login page');
  return (
    <div className={classes.siginIn}>
      <A11yHidden as='h1'>login page</A11yHidden>
      <AuthFormContainer>
        로그인
      </AuthFormContainer>
    </div>
  )
}

export default SignIn;
