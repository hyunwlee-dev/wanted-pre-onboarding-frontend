import { useLocation } from 'react-router-dom';
import { Container, SignInForm, SignUpForm } from '../../components';
import { AuthForm } from '../../components/Form';
import { useAuthFormState } from '../../contexts';
import classess from './authFormContainer.module.css';

const AuthFormContainer = ({ children, ...restProps }) => {
  const {pathname} = useLocation();
  const {
    signInEmail, setSignInEmail, signInPassword, setSignInPassword,
    signUpEmail, setSignUpEmail, signUpPassword, setSignUpPassword
  } = useAuthFormState();
  const onSignInEmailChange = (e) => {setSignInEmail(e.target.value)};
  const onSignInPasswordChange = (e) => {setSignInPassword(e.target.value)};
  const onSignUpEmailChange = (e) => {setSignUpEmail(e.target.value)};
  const onSignUpPasswordChange = (e) => {setSignUpPassword(e.target.value)};
  return (
    <Container className={classess.authFormContainer}>
      {pathname === '/signin' &&
        <AuthForm 
          email={signInEmail}
          password={signInPassword}
          onEmailChange={onSignInEmailChange}
          onPasswordChange={onSignInPasswordChange}  
        />
      }
      {pathname === '/signup' &&
        <AuthForm 
          email={signUpEmail}
          password={signUpPassword}
          onEmailChange={onSignUpEmailChange}
          onPasswordChange={onSignUpPasswordChange}  
        />
      }
    </Container>
  );
}

export { AuthFormContainer };
