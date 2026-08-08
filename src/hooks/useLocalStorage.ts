import { useEffect, useState } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;
  const saved = window.localStorage.getItem(key);
  return saved !== null ? (JSON.parse(saved) as T) : defaultValue;
}

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
