import PropTypes from "prop-types";
import { useState, createContext, useMemo, useContext } from "react";

const GlobalStateContext = createContext();

GlobalStateContext.displayName = "GlobalStateContext";

export const GlobalStateProvider = ({ children }) => {
  const [logoLabel, setLogoLabel] = useState(
    "Stateful Component & Form Design"
  );

  const [navList, setNavList] = useState([
    { id: "home", to: "/", text: "홈", active: true },
    { id: "signup", to: "/signup", text: "회원가입", active: false },
    { id: "signin", to: "/signin", text: "로그인", active: false },
    { id: "todos", to: "/todos", text: "할 일 목록", active: false },
  ]);

  const globalStateValue = useMemo(
    () => ({
      logoLabel,
      updateLogoLabel: setLogoLabel,
      navList,
      updateNavList: setNavList,
    }),
    [logoLabel, navList]
  );

  return (
    <GlobalStateContext.Provider value={globalStateValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useGlobalState() {
  const globalState = useContext(GlobalStateContext);

  if (!globalState) {
    throw new ReferenceError(
      "useGlobalState 훅은 GlobalState 컨텍스트 내부에서만 호출해야 합니다."
    );
  }

  return globalState;
}
