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
    <Form 
      className={classes.authForm} 
      action={() => {}} 
      legendText={'이메일, 비밀번호 입력 폼'}
    >
      <div className={classes.flexWrapper}>
        <label htmlFor={emailId}>이메일</label>
        <input id={emailId} type='text' value={email} onChange={onEmailChange}/>
      </div>
      <div className={classes.flexWrapper}>
        <label htmlFor={passwordId}>비밀번호</label>
        <input id={passwordId} type='password' value={password} onChange={onPasswordChange}/>
      </div>
      <button type='submit'>{buttonText}</button>
    </Form>
  )
}

export { AuthForm };

