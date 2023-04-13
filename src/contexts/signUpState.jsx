import PropTypes from "prop-types";
import {
  useState,
  createContext,
  useMemo,
  useContext,
  useCallback,
} from "react";
import { isEmail, isPassword } from "../utils/validator";

const SignUpContext = createContext();

SignUpContext.displayName = "SignUpContext";

export const SignUpContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAvailableSignUp = useCallback(() => {
    if (email.length < 1) return false;
    if (password.length < 1) return false;
    if (isEmail(email) && isPassword(password)) return true;
    return false;
  }, [email, password]);

  const signUpStateValue = useMemo(
    () => ({
      email,
      updateEmail: setEmail,
      password,
      updatePassword: setPassword,
      isAvailableSignUp,
    }),
    [email, password]
  );

  return (
    <SignUpContext.Provider value={signUpStateValue}>
      {children}
    </SignUpContext.Provider>
  );
};

SignUpContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSignUpState() {
  const signUpState = useContext(SignUpContext);

  if (!signUpState) {
    throw new ReferenceError(
      "useSignUpState 훅은 SignUpState 컨텍스트 내부에서만 호출해야 합니다."
    );
  }

  return signUpState;
}
