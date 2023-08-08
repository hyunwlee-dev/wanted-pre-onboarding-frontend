import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage"

const useLoginRedirect = () => {
  const navigate = useNavigate();
  const { storedValue } = useLocalStorage('access_token');
  useEffect(() => {
    !storedValue && navigate('/signin');
  }, [navigate, storedValue]);
}

export { useLoginRedirect };
