// hooks/useFetchData.js
import { useState, useCallback } from 'react';

const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async (url, method = 'GET', isAuth = false, bodyData = null) => {
    setLoading(true);
    const myauth = isAuth ? localStorage.getItem('access_token') : null;

    let options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: isAuth ? `Bearer ${myauth}` : '',
      },
      body: method === 'POST' || method === 'PUT' || method === 'PATCH' ? JSON.stringify(bodyData) : null,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
      return { result, error: null };
    } catch (error) {
      setError(error);
      setLoading(false);
      return { result: null, error };
    }
  }, []);

  return { loading, error, data, fetchData };
};

export default useFetchData;
