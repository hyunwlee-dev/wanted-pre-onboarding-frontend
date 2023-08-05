import { createContext, useState, useContext, useMemo } from "react";

const GlobalStateContext = createContext();
GlobalStateContext.displayName = 'GlobalStateContext';

const GlobalStateProvider = ({ children }) => {
  const [navList, setNavList] = useState([
    { id: 'home', to: '/', text: '홈'},
    { id: 'signin', to: '/signin', text: '로그인'},
    { id: 'signup', to: '/signup', text: '회원가입'},
    { id: 'todo', to: '/todo', text: '할 일 목록'},
  ]);
  const globalStateValue = useMemo(
    () => ({
      navList,
      setNavList
    }), [navList]
  );

  return (
    <GlobalStateContext.Provider value={globalStateValue}>
      {children}
    </GlobalStateContext.Provider>
  )
}

const useGlobalState = () => {
  const globalState = useContext(GlobalStateContext);
  if (!globalState) {
    throw new ReferenceError(
      'useGlobalState훅은 GlobalState 컨텍스트 내부에서만 호출해야 합니다.'
    );
  }
  return globalState;
}

export { GlobalStateProvider, useGlobalState };
