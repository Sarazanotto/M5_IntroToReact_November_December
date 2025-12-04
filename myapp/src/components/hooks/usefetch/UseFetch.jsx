import { useEffect, useState } from "react";

export const usefetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = res.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return isLoading, data, error;
};
