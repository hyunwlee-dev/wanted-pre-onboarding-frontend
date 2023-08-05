import { useId } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components';
import { AuthForm } from '../../components/Form';
import { useAuthFormState } from '../../contexts';
import classes from './authFormContainer.module.css';

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
  const signInEmailId = useId();
  const signInPasswordId = useId();
  const signUpEmailId = useId();
  const signUpPasswordId = useId();
  return (
    <Container className={classes.authFormContainer} {...restProps}>
      {pathname === '/signin' &&
        <>
          <AuthForm 
            emailId={signInEmailId}
            passwordId={signInPasswordId}
            email={signInEmail}
            password={signInPassword}
            onEmailChange={onSignInEmailChange}
            onPasswordChange={onSignInPasswordChange}  
            buttonText={'로그인'}
          />
        </>
      }
      {pathname === '/signup' &&
        <>
          <AuthForm
            emailId={signUpEmailId}
            passwordId={signUpPasswordId}
            email={signUpEmail}
            password={signUpPassword}
            onEmailChange={onSignUpEmailChange}
            onPasswordChange={onSignUpPasswordChange}  
            buttonText={'회원가입'}
          />
        </>
      }
    </Container>
  );
}

export { AuthFormContainer };
