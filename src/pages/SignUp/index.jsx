import { useDocumentTitle } from '../../hooks';
import classes from './signUp.module.css';
import { A11yHidden } from '../../components/';
import { AuthFormContainer } from '../../containers/';

const SignUp = () => {
  useDocumentTitle('create account page');
  return (
    <div className={classes.signUp}>
      <A11yHidden as='h1'>create account page</A11yHidden>
      <AuthFormContainer>
        회원가입
      </AuthFormContainer>
    </div>
  )
}

export default SignUp;
