import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useGlobalState } from "../../../contexts/globalState";

export function RequiredAuth({ children }) {
  const { navList, updateNavList } = useGlobalState();
  const auth = localStorage.getItem("access_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      const updatedList = navList.map((list) => {
        if (list.id === "signin") return { ...list, active: true };
        return { ...list, active: false };
      });
      updateNavList(updatedList);
      alert("로그인이 필요한 서비스입니다.");
      navigate("/signin");
    }
  }, []);
  return children;
}
