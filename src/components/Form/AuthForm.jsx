import classes from './authForm.module.css';
import { Form } from './Form';

const AuthForm = ({
  emailId,
  passwordId,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  buttonSide,
}) => {
  return (
    <Form 
      className={classes.authForm} 
      onSubmit={onSubmit} 
      legendText={'이메일, 비밀번호 입력 폼'}
    >
      <div className={classes.flexWrapper}>
        <label htmlFor={emailId}>이메일</label>
        <input data-testid='email-input' id={emailId} type='text' value={email} onChange={onEmailChange}/>
      </div>
      <div className={classes.flexWrapper}>
        <label htmlFor={passwordId}>비밀번호</label>
        <input data-testid='password-input' id={passwordId} type='password' value={password} onChange={onPasswordChange}/>
      </div>
      {buttonSide}
    </Form>
  )
}

export { AuthForm };

