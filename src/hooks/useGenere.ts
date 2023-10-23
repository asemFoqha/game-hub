import { useEffect, useState } from "react";

import apiClient from "../service/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface FetchGenereResponse {
  count: number;
  results: Genre[];
}

const useGenere = () => {
  const [generes, setGeneres] = useState<Genre[]>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenereResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGeneres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { generes, error, isLoading };
};
export default useGenere;
