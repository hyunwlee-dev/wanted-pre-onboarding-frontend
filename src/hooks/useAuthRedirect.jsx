import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const useAuthRedirect = () => {
  const { storedValue } = useLocalStorage('access_token');
  const navigate = useNavigate();
  useEffect(() => {
    storedValue && navigate('/todo');
  }, []);
}

export { useAuthRedirect };
