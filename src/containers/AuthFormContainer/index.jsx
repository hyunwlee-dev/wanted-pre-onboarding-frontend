import { useLocation } from 'react-router-dom';
import { Container, SignInForm, SignUpForm } from '../../components';
import { useSignInState } from '../../contexts';
import classess from './authFormContainer.module.css';

const AuthFormContainer = ({ children, ...restProps }) => {
  const {pathname} = useLocation();
  const {email, setEmail, password, setPassword} = useSignInState();
  return (
    <Container className={classess.authFormContainer}>
    {pathname === '/signin' && <SignInForm/>}
    {pathname === '/signup' && <SignUpForm/>}
    </Container>
  );
}

export { AuthFormContainer };
