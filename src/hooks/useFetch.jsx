import { useState, useEffect } from "react";

export default function useFetch(
  { url = "", method = "GET", headers = {} },
  { enabled } = { enabled: true },
) {
  const api_host = import.meta.env.VITE_API_HOST;
  const TMDB_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
  const DEFAULT_HEADERS = {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`,
  };

  const options = {
    method, // method: method
    headers: {
      ...DEFAULT_HEADERS,
      ...headers,
    },
  };

  const [data, setData] = useState({}); // data for reuse-function
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (enabled) {
      setIsLoading(true);
      fetch(`${api_host}${url}`, options)
        .then(async (res) => {
          const data = await res.json();
          setData(data);
        })
        .catch((err) => {
          console.error("Error fetching movies:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, JSON.stringify(headers), enabled]);
  // Cứ mỗi lần useFetch được execute thì nó lại tạo headers object mới tại địa chỉ mới - so sánh tham chiếu khác nhau -> fetch liên tục
  // Compare string for VALUE

  return { isLoading, data };
}
