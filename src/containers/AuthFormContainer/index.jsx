import { useCallback, useId } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../api';
import { Container, AuthForm } from '../../components';
import { useAuthFormState } from '../../contexts';
import { useFetch, useLocalStorage } from '../../hooks';
import classes from './authFormContainer.module.css';
import { validator } from '../../utils';

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
  }, [fetchData, navigate, signUpEmail, signUpPassword, setSignUpEmail, setSignUpPassword]);
  const login = useCallback(async(e) => {
    e.preventDefault();
    const response = await fetchData(signIn({email: signInEmail, password: signInPassword}));
    if (response.status === 200) {
      setSignInEmail('');
      setSignInPassword('');
      if (response?.data?.access_token) {
        setValue(response?.data?.access_token);
        navigate(0);
      }
    }
  }, [fetchData, navigate, setValue, setSignInEmail, setSignInPassword, signInEmail, signInPassword]);
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
          buttonSide={
            <button
              data-testid='signin-button'
              type='submit'
              disabled={!validator.isEmail(signInEmail) || !validator.isPassword(signInPassword)}
            >
              로그인
            </button>
          }
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
          buttonSide={
            <button
              data-testid='signup-button'
              type='submit'
              disabled={!validator.isEmail(signUpEmail) || !validator.isPassword(signUpPassword)}
            >
              회원가입
            </button>
          }
        />
      }
    {!isLoading && error && <div role='alert' className={classes.error}>{error}</div>}
    {isLoading && <div role='alert' className={classes.isLoading}>loading...</div>}
    </Container>
  );
}

export { AuthFormContainer };
