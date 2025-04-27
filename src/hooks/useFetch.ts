// src/hooks/useFetch.ts
import { useState, useEffect } from 'react';

/**
 * useFetch - React hook para requisições HTTP via Fetch API
 * @param url Endpoint a ser chamado
 * @param options (opcional) configurações do fetch (method, headers, body, etc.)
 * @returns {{ data: T | null; error: Error | null; loading: boolean }}
 */
export function useFetch<T = unknown>(
  url: string,
  options?: RequestInit
): { data: T | null; error: Error | null; loading: boolean } {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch(url, options)
      .then(async response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = (await response.json()) as T;
        if (isMounted) setData(json);
      })
      .catch(err => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url, JSON.stringify(options)]);

  return { data, error, loading };
}
