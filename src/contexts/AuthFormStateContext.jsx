import { createContext, useState, useContext, useMemo } from "react";

const AuthFormStateContext = createContext();
AuthFormStateContext.displayName = 'AuthFormStateContext';

const AuthFormContextProvider = ({ children }) => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const authFormStateValue = useMemo(() => ({
    signInEmail,
    setSignInEmail,
    signUpEmail,
    setSignUpEmail,
    signInPassword,
    setSignInPassword,
    signUpPassword,
    setSignUpPassword
  }), [signInEmail, signInPassword, signUpEmail, signUpPassword]);

  return (
    <AuthFormStateContext.Provider value={authFormStateValue}>
      {children}
    </AuthFormStateContext.Provider>
  )
}

const useAuthFormState = () => {
  const authFormState = useContext(AuthFormStateContext);
  if (!authFormState) {
    throw new ReferenceError(
      'useAuthFormState훅은 AuthFormState 컨텍스트 내부에서만 호출해야 합니다.'
    );
  }
  return authFormState;
}

export { AuthFormContextProvider, useAuthFormState };
