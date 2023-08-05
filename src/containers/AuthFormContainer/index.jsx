import { useLocation } from 'react-router-dom';
import { Container } from '../../components';
import { useSignInState } from '../../contexts';
import classess from './authFormContainer.module.css';

const AuthFormContainer = ({ children, ...restProps }) => {
  const {pathname} = useLocation();
  const {email, setEmail, password, setPassword} = useSignInState();
  return (
    <Container className={classess.authFormContainer}>
      {children}
    </Container>
  );
}

export { AuthFormContainer };
