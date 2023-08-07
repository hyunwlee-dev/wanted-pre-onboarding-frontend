import { useCallback, useId } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../api';
import { Container, AuthForm } from '../../components';
import { useAuthFormState } from '../../contexts';
import { useFetch, useLocalStorage } from '../../hooks';
import classes from './authFormContainer.module.css';

const AuthFormContainer = ({ children, ...restProps }) => {
  const navigate = useNavigate();
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
  const { isLoading, error, fetchData } = useFetch();
  const { setValue } = useLocalStorage('access_token', null);
  const createAccount = useCallback(async (e) => {
    e.preventDefault();
    const response = await fetchData(signUp({email: signUpEmail, password: signUpPassword}));
    if (response.status === 201) {
      setSignUpEmail('');
      setSignUpPassword('');
      navigate('/signin');
    }
  }, [signUpEmail, signUpPassword]);
  const login = useCallback(async(e) => {
    e.preventDefault();
    const response = await fetchData(signIn({email: signInEmail, password: signInPassword}));
    if (response.status === 200) {
      setSignInEmail('');
      setSignInPassword('');
      setValue(response?.data?.access_token);
      navigate('/todo');
    }
  }, [signInEmail, signInPassword]);
  return (
    <Container className={classes.authFormContainer} {...restProps}>
      {pathname === '/signin' &&
        <AuthForm 
          emailId={signInEmailId}
          passwordId={signInPasswordId}
          email={signInEmail}
          password={signInPassword}
          onEmailChange={onSignInEmailChange}
          onPasswordChange={onSignInPasswordChange}
          onSubmit={login}
          buttonText={'로그인'}
        />
      }
      {pathname === '/signup' &&
        <AuthForm
          emailId={signUpEmailId}
          passwordId={signUpPasswordId}
          email={signUpEmail}
          password={signUpPassword}
          onEmailChange={onSignUpEmailChange}
          onPasswordChange={onSignUpPasswordChange}  
          onSubmit={createAccount}
          buttonText={'회원가입'}
        />
      }
    {!isLoading && error && <div role='alert' className={classes.error}>{error}</div>}
    {isLoading && <div role='alert' className={classes.isLoading}>loading...</div>}
    </Container>
  );
}

export { AuthFormContainer };
