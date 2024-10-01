import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genra {
    id: number;
    name: string;
}

interface FetchGenraResponse {
    count: number;
    results: Genra[];
}

const useGenras = () => {
  const [genras, setGenras] = useState<Genra[]>([]);
  const [error, setError] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenraResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenras(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { genras, error, isloading };
};

export default useGenras;
