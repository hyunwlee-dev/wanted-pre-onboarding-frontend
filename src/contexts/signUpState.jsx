import PropTypes from "prop-types";
import { useState, createContext, useMemo, useContext } from "react";

const EmailStateContext = createContext();
const PasswordStateContext = createContext();

EmailStateContext.displayName = "EmailStateContext";
PasswordStateContext.displayName = "PasswordStateContext";

export const EmailStateProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const emailStateValue = useMemo(
    () => ({
      email,
      updateEmail: setEmail,
    }),
    [email]
  );

  return (
    <EmailStateContext.Provider value={emailStateValue}>
      {children}
    </EmailStateContext.Provider>
  );
};

export function useEmailState() {
  const emailState = useContext(EmailStateContext);

  if (!emailState) {
    throw new ReferenceError(
      "useEmailState 훅은 EmailState 컨텍스트 내부에서만 호출해야 합니다."
    );
  }

  return emailState;
}

export const PasswordStateProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const passwordStateValue = useMemo(
    () => ({
      password,
      updatePassword: setPassword,
    }),
    [password]
  );

  return (
    <PasswordStateContext.Provider value={passwordStateValue}>
      {children}
    </PasswordStateContext.Provider>
  );
};

PasswordStateContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export function usePasswordState() {
  const passwordState = useContext(PasswordStateContext);

  if (!passwordState) {
    throw new ReferenceError(
      "usePasswordState 훅은 PasswordState 컨텍스트 내부에서만 호출해야 합니다."
    );
  }

  return passwordState;
}
