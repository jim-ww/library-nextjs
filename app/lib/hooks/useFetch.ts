import { useState, useEffect } from "react";

const useFetch = <T>(endpoint: string, options = {}): T | null => {
  const baseUrl = "http://localhost:8090/api";
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        ...options,
      });
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [endpoint, options]);

  return data;
};

export default useFetch;
