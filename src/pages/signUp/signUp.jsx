import classes from "./signUp.module.css";
import { useId, Fragment, useMemo } from "react";
import { Label } from "../../component/label/label";
import { Button } from "../../component/button/button";
import { useSignUpState } from "../../contexts/signUpState";
import { Fieldset } from "../../component/fieldset/fieldset";
import { BaseLayout } from "../../component/layout/baseLayout";
import { Container } from "../../component/container/contianer";
import { EmailInput } from "../../component/input/email/emailInput";
import { PasswordInput } from "../../component/input/password/passwordInput";
import { EmailValidation } from "../../component/validation/email/emailValidation";
import { PasswordValidation } from "../../component/validation/password/passwordValidation";
import { SignUpButton } from "../../component/button/signUp/signUpButton";

export function SignUp() {
  const emailId = useId();
  const passwordId = useId();
  const { email, updateEmail, password, updatePassword, isAvailableSignUp } =
    useSignUpState();

  return (
    <BaseLayout className={classes.BaseLayout}>
      <div className={classes.SignUp}>
        <h2 className={classes.SignUpTitle}>회원가입</h2>
        <Container as={"form"}>
          <Fieldset className={classes.Fieldset} legend="회원가입 폼 입니다.">
            <Container role="form" className={classes.EmailWrapper}>
              <Label
                className={classes.EmailLabel}
                labelStyle={"Large"}
                htmlFor={emailId}
              >
                이메일
              </Label>
              <Container className={classes.EmailPart}>
                <EmailInput
                  className={classes.EmailInput}
                  data-testid="email-input"
                  id={emailId}
                  value={email}
                  onChange={updateEmail}
                  placeholder="예) wanted@wanted.com"
                />
                <EmailValidation email={email} />
              </Container>
            </Container>

            <Container role="form" className={classes.PwWrapper}>
              <Label
                className={classes.PwLabel}
                labelStyle={"Large"}
                htmlFor={passwordId}
              >
                비밀번호
              </Label>
              <Container className={classes.PwPart}>
                <PasswordInput
                  className={classes.PwInput}
                  data-testid="password-input"
                  id={passwordId}
                  value={password}
                  onChange={updatePassword}
                  placeholder="비밀번호를 입력해주세요."
                />
                <PasswordValidation password={password} />
              </Container>
            </Container>
            <Container className={classes.ButtonWrapper}>
              <SignUpButton
                className={classes.SubmitButton}
                data-testid="signup-button"
                isAvailableSignUp={isAvailableSignUp()}
              >
                가입하기
              </SignUpButton>
            </Container>
          </Fieldset>
        </Container>
      </div>
    </BaseLayout>
  );
}
