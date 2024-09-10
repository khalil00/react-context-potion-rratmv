import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function usePersistedState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const value = window.localStorage.getItem(key);
    console.log(value);

    return value && value !== 'undefined' ? JSON.parse(value) : defaultValue;
  });

  useEffect(() => {
    if (value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.localStorage.removeItem(key);
    }
  }, [key, value]);

  return [value, setValue];
}

export default usePersistedState;
