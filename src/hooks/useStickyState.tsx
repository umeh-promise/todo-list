import { useEffect, useState } from 'react';

export default function useStickyState(initialValue: any, key: string) {
  const [value, setValue] = useState<any>(function () {
    const stickyValue = localStorage.getItem(key);

    return stickyValue !== null ? JSON.parse(stickyValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
