import { createContext, useState, useContext, useMemo } from "react";

const SignInStateContext = createContext();
SignInStateContext.displayName = 'SignInStateContext';

const SignInContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signInStateValue = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword
  }), [email, password]);

  return (
    <SignInStateContext.Provider value={signInStateValue}>
      {children}
    </SignInStateContext.Provider>
  )
}

const useSignInState = () => {
  const signInState = useContext(SignInStateContext);
  if (!signInState) {
    throw new ReferenceError(
      'useSignInState훅은 SignInState 컨텍스트 내부에서만 호출해야 합니다.'
    );
  }
  return signInState;
}

export { SignInContextProvider, useSignInState };
