import { useState, useEffect, useCallback,useRef  } from 'react';
import { AxiosError } from 'axios';

interface UseApiOptions<T, P> {
  onSuccess?: (data: T) => void;
  onError?: (error: AxiosError) => void;
  immediate?: boolean;
  immediateParams?: P;
}

export function useApi<T, P = void>(
  apiCall: (params: P) => Promise<T>,
  options: UseApiOptions<T, P> = { immediate: false }
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(options.immediate || false);
  const executedRef = useRef(false);

  const execute = useCallback(async (params: P) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall(params);
      setData(result);
      options.onSuccess?.(result);
      return result;
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError);
      options.onError?.(axiosError);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiCall, options]);
  
  useEffect(() => {
    if (options.immediate && options.immediateParams !== undefined && !executedRef.current) {
      executedRef.current = true;
      execute(options.immediateParams);
    }
  }, []);
  
  return { data, error, loading, execute, setData };
}