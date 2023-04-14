import PropTypes from "prop-types";
import {
  useState,
  createContext,
  useMemo,
  useContext,
  useCallback,
} from "react";
import { isEmail, isPassword } from "../utils/validator";

const SignInContext = createContext();

SignInContext.displayName = "SignInContext";

export const SignInContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInStateValue = useMemo(
    () => ({
      email,
      updateEmail: setEmail,
      password,
      updatePassword: setPassword,
    }),
    [email, password]
  );

  return (
    <SignInContext.Provider value={signInStateValue}>
      {children}
    </SignInContext.Provider>
  );
};

SignInContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSignInState() {
  const signInState = useContext(SignInContext);

  if (!signInState) {
    throw new ReferenceError(
      "useSignInState 훅은 SignInState 컨텍스트 내부에서만 호출해야 합니다."
    );
  }

  return signInState;
}
