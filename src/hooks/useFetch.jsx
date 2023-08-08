import { useState, useCallback } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (responsePromise) => {
    setIsLoading(true);
    try {
      const response = await responsePromise;
      if (response.status === 200 || response.status === 201 || response.status === 204) {
        setData(response?.data);
        setError(null);
      } else {
        setError(response?.response?.data?.message);
      }
      return (response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [data, isLoading, error]);
  return {
    data,
    error,
    isLoading,
    fetchData,
  }
}
