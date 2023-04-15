import { useCallback, useEffect, useId } from "react";
import { Container } from "../../component/container/contianer";
import { Fieldset } from "../../component/fieldset/fieldset";
import classes from "./signIn.module.css";
import { Label } from "../../component/label/label";
import { EmailInput } from "../../component/input/email/emailInput";
import { useSignInState } from "../../contexts/signInState";
import { PasswordInput } from "../../component/input/password/passwordInput";
import { Button } from "../../component/button/button";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { saveStorage } from "../../utils/storage";
import { useGlobalState } from "../../contexts/globalState";
export default function SignIn() {
  const emailId = useId();
  const passwordId = useId();
  const { email, updateEmail, password, updatePassword } = useSignInState();

  const { isLoading, error, data, fetchData } = useFetch();
  const navigate = useNavigate();
  const { navList, updateNavList } = useGlobalState();

  const handleClickSignIn = useCallback(async () => {
    try {
      await fetchData("http://localhost:8000/auth/signin", "POST", {
        email,
        password,
      });
    } catch (e) {
      throw new Error("e: ", e);
    }
  });

  const saveToken = async (token) => {
    await saveStorage(token[0], token[1]);
  };

  useEffect(() => {
    if (data) {
      const updatedList = navList.map((list) => {
        if (list.id === "todos") return { ...list, active: true };
        return { ...list, active: false };
      });
      updateNavList(updatedList);
      saveToken(Object.entries(JSON.parse(data))[0]);
      navigate("/todos");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert("아이디나 비밀번호를 확인해주세요!");
    }
  }, [error]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={classes.SignIn}>
      <h2 className={classes.SignInTitle}>로그인</h2>
      <Container as={"form"}>
        <Fieldset className={classes.Fieldset} legend="로그인 폼 입니다.">
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
            </Container>
          </Container>
          <Container className={classes.ButtonWrapper}>
            <Button
              className={classes.LoginButton}
              data-testid="signup-button"
              onClick={handleClickSignIn}
            >
              로그인
            </Button>
          </Container>
        </Fieldset>
      </Container>
    </div>
  );
}
