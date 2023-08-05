import { useLocation } from 'react-router-dom';
import { useSignInState } from '../../contexts';
import classess from './authFormContainer.module.css';

const AuthFormContainer = ({ ...restProps }) => {
  const { pathname } = useLocation();
  const {email, setEmail, password, setPassword} = useSignInState();
  <div className={classess.authFormContainer}>
    test
  </div>
}

export { AuthFormContainer };
