import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../contexts/globalState";

export default function SignOut() {
  const navigate = useNavigate();
  const { updateNavList } = useGlobalState();
  useEffect(() => {
    localStorage.removeItem("access_token");
    navigate("/");
    updateNavList([
      { id: "home", to: "/", text: "홈", active: true },
      { id: "signup", to: "/signup", text: "회원가입", active: false },
      { id: "signin", to: "/signin", text: "로그인", active: false },
      { id: "todo", to: "/todo", text: "할 일 목록", active: false },
    ]);
  }, []);
}
