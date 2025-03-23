import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";

interface UseFetchDataProps {
  url: string;
  objectKey: string;
}

const useFetchData = <T>({ url, objectKey }: UseFetchDataProps) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError("");

      const response = await fetchData<{ [key: string]: T }>(url);

      if (!response) {
        setError("Error fetching data");
      } else {
        // Dynamically access the object from the response based on the provided key
        setData(response[objectKey] || null);
      }

      setLoading(false);
    };

    loadData();
  }, [url, objectKey]);

  return { data, loading, error };
};

export default useFetchData;
