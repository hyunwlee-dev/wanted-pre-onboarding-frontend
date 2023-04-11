import { useId, Fragment } from "react";
import classes from "./signUp.module.css";
import { Label } from "../../component/label/label";
import { Fieldset } from "../../component/fieldset/fieldSet";
import { PasswordInput } from "../../component/input/password/passwordInput";
import { EmailInput } from "../../component/input/email/emailInput";
import { Button } from "../../component/button/button";
import { BaseLayout } from '../../component/layout/baseLayout';
import { Container } from '../../component/container/contianer';

export function SignUp() {
  const emailId = useId();
  const passwordId = useId();

  const handlePwInput = () => {};
  const handleEmailInput = () => {};
  const handleSignUp = () => {};

  return (
    <BaseLayout>
      <div className={classes.signUp}>
        <h2>회원가입</h2>
        <Container as={'form'}>
          <Fieldset className={classes.fieldset} legend="회원가입 폼 입니다.">
            <Label className={classes.emailLabel} htmlFor={emailId}>
              이메일
            </Label>

            <EmailInput
              className={classes.emailInput}
              data-testid="email-input"
              id={emailId}
              placeholder="예) wanted@wanted.com"
              onChange={handleEmailInput}
            />
            {/* <EmailValidation className={classes.emailValidation} />  */}

            <Label className={classes.pwLabel} htmlFor={passwordId}>
              비밀번호
            </Label>
            <PasswordInput
              className={classes.pwInput}
              data-testid="password-input"
              id={passwordId}
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePwInput}
            />
            <Button
              className={classes.submit}
              data-testid="signup-button"
              onClick={handleSignUp}
            >
              가입하기
            </Button>
          </Fieldset>
        </Container>
      </div>
    </BaseLayout>
  );
}
