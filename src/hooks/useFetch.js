import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetchDataFromApi(url);
    setIsLoading(false)
    setData(res);
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return {data,loading:isLoading};
};

export default useFetch;
