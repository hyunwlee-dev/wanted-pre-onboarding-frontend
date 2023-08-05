import classes from './authForm.module.css';
import { Form } from './Form';

const AuthForm = ({
  emailId,
  passwordId,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  buttonText = '' 
}) => {
  return (
    <Form className={classes.authForm} action={() => {}} legendText={'로그인 입력 폼'}>      
      <label htmlFor={emailId}>이메일</label>
      <input id={emailId} type='text'/>
      <label htmlFor={passwordId}>비밀번호</label>
      <input id={passwordId} type='password'/>
      <button type='submit'>{buttonText}</button>
    </Form>
  )
}

export { AuthForm };

