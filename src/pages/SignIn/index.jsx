import { AuthFormContainer } from '../../containers';
import { useDocumentTitle } from '../../hooks';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';
import classes from './signIn.module.css';

const SignIn = () => {
  useDocumentTitle('login page');
  useAuthRedirect();
  return (
    <div className={classes.signIn}>
      <h1>login page</h1>
      <AuthFormContainer>
        로그인
      </AuthFormContainer>
    </div>
  )
}

export default SignIn;
