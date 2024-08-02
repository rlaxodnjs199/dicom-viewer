import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initailValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initailValue;
    } catch (error) {
      console.log(error);
      return initailValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
