import { useDocumentTitle } from '../../hooks';
import classes from './signUp.module.css';
import { A11yHidden } from '../../components/';
import { AuthFormContainer } from '../../containers/';

const SignUp = () => {
  useDocumentTitle('create account page');
  return (
    <div className={classes.signUp}>
      <h1>create account page</h1>
      <AuthFormContainer>
        회원가입
      </AuthFormContainer>
    </div>
  )
}

export default SignUp;
