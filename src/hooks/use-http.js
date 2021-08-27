import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    const { url, method, headers, body } = requestConfig;
    try {
      const response = await fetch(url, {
        method: method ? method : 'GET',
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null
      });
      if (!response.ok) {
        console.log(response);
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data)

    } catch (err) {
      console.log(err.message);
      setError(err.message || 'Something went wrong')
    }
    setIsLoading(false)
  }, [])
  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp;