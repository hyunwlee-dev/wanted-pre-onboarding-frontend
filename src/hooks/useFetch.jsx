import { useState, useEffect, useCallback, useMemo } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, method = "GET", body = null) => {
    setIsLoading(true);
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      let options = {
        method,
        headers,
      };
      if (body) {
        options = {
          ...options,
          body: JSON.stringify(body),
        };
      }
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Network response was not ok");
      const json = await response.json();
      setData(JSON.stringify(json));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      data,
      error,
      isLoading,
      fetchData,
    }),
    [data, error, isLoading, fetchData]
  );
}
