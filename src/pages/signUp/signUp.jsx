import { useId, Fragment, useCallback, useState, useMemo } from "react";
import classes from "./signUp.module.css";
import { Label } from "../../component/label/label";
import { Fieldset } from "../../component/fieldset/fieldset";
import { PasswordInput } from "../../component/input/password/passwordInput";
import { EmailInput } from "../../component/input/email/emailInput";
import { Button } from "../../component/button/button";
import { BaseLayout } from "../../component/layout/baseLayout";
import { Container } from "../../component/container/contianer";
import { PasswordValidation } from "../../component/validation/password/passwordValidation";
import { EmailValidation } from "../../component/validation/email/emailValidation";
import { useGlobalState } from "../../contexts/globalState";
import {
  EmailStateProvider,
  PasswordStateProvider,
  useEmailState,
} from "../../contexts/signUpState";

export function SignUp() {
  const emailId = useId();
  const passwordId = useId();
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
                <EmailStateProvider>
                  <EmailInput
                    className={classes.EmailInput}
                    data-testid="email-input"
                    id={emailId}
                    placeholder="예) wanted@wanted.com"
                  />
                  <EmailValidation />
                </EmailStateProvider>
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
                <PasswordStateProvider>
                  <PasswordInput
                    className={classes.PwInput}
                    data-testid="password-input"
                    id={passwordId}
                    placeholder="비밀번호를 입력해주세요."
                  />
                  <PasswordValidation />
                </PasswordStateProvider>
              </Container>
            </Container>
            <Container className={classes.ButtonWrapper}>
              <Button
                className={classes.SubmitButton}
                data-testid="signup-button"
              >
                가입하기
              </Button>
            </Container>
          </Fieldset>
        </Container>
      </div>
    </BaseLayout>
  );
}
